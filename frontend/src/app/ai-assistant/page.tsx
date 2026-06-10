import { ChatAssistant } from "@/components/ai/chat-assistant";
import { SiteLayout } from "@/components/shared/site-layout";

export default function AIAssistantPage() {
  return (
    <SiteLayout showSearch={false}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ChatAssistant />
      </div>
    </SiteLayout>
  );
}
