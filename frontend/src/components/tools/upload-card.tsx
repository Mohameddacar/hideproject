import { CloudUpload } from "lucide-react";

export function UploadCard() {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-zinc-900/50 px-6 py-12 text-center transition-colors hover:border-[#c7d2fe]/30 hover:bg-zinc-900">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-zinc-800">
        <CloudUpload className="size-6 text-zinc-400" />
      </div>
      <h3 className="font-semibold text-white">Upload Archive Photo</h3>
      <p className="mt-2 text-sm text-zinc-500">
        Drag and drop or click to browse
      </p>
      <p className="mt-1 text-xs text-zinc-600">
        Supports JPG, PNG up to 25MB
      </p>
    </div>
  );
}
