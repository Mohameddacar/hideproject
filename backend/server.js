
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'frontend');

const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'application/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.txt': 'text/plain; charset=utf-8',
};

function sendJSON(res, obj, status = 200) {
	const body = JSON.stringify(obj);
	res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
	res.end(body);
}

function send404(res, acceptHtml = false) {
	if (acceptHtml) {
		// Try to serve index.html for SPA fallback
		const indexPath = path.join(PUBLIC_DIR, 'index.html');
		if (fs.existsSync(indexPath)) {
			const data = fs.readFileSync(indexPath);
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			return res.end(data);
		}
	}
	sendJSON(res, { error: 'Not found' }, 404);
}

function serveStatic(req, res, parsedUrl) {
	let pathname = decodeURIComponent(parsedUrl.pathname);
	if (pathname === '/') pathname = '/index.html';

	// Prevent path traversal
	const safePath = path.normalize(path.join(PUBLIC_DIR, pathname));
	if (!safePath.startsWith(PUBLIC_DIR)) {
		return sendJSON(res, { error: 'Invalid path' }, 400);
	}

	if (!fs.existsSync(safePath)) {
		const accepts = (req.headers.accept || '');
		return send404(res, accepts.includes('text/html'));
	}

	const stat = fs.statSync(safePath);
	if (stat.isDirectory()) {
		const indexFile = path.join(safePath, 'index.html');
		if (fs.existsSync(indexFile)) {
			const data = fs.readFileSync(indexFile);
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			return res.end(data);
		}
		return send404(res, true);
	}

	const ext = path.extname(safePath).toLowerCase();
	const type = MIME[ext] || 'application/octet-stream';
	const stream = fs.createReadStream(safePath);
	res.writeHead(200, { 'Content-Type': type });
	stream.pipe(res);
}

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url || '/', true);
	const pathname = parsedUrl.pathname || '/';

	// Simple API routes
	if (pathname === '/health' || pathname === '/_health') {
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		return res.end('ok');
	}

	if (pathname.startsWith('/api/')) {
		// Example endpoint: GET /api/hello
		if (pathname === '/api/hello') {
			return sendJSON(res, { message: 'Hello from server' });
		}
		return sendJSON(res, { error: 'Unknown API endpoint' }, 404);
	}

	// Serve static files from frontend/
	try {
		return serveStatic(req, res, parsedUrl);
	} catch (err) {
		console.error('Server error:', err);
		sendJSON(res, { error: 'Server error' }, 500);
	}
});

server
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
		console.log(`Serving static files from ${PUBLIC_DIR}`);
	})
	.on('error', (err) => {
		if (err.code === 'EADDRINUSE') {
			console.error(
				`Port ${PORT} is already in use. Try: set PORT=3002 && node backend/server.js`
			);
		} else {
			console.error('Server failed to start:', err);
		}
		process.exit(1);
	});

module.exports = server;
