import { useEffect, useRef } from "react";
import ChatMessageCard from "./ChatMessageCard";

export default function ChatFeed({ messages }) {
  const feedRef = useRef();

  // 自动滚动到底部
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={feedRef}
      className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#FFF7E8]"
    >
      {messages.map((msg, idx) => (
        <ChatMessageCard key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
}
