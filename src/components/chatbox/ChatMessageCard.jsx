import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatMessageCard({ role, content }) {
    const isUser = role === "user";
    const [expanded, setExpanded] = useState(false);

    const LIMIT = 300;
    const isLong = content.length > LIMIT;

    const displayText = expanded ? content : content.slice(0, LIMIT);

    return (
        <div
            className={`p-3 rounded-xl shadow ${
                isUser ? "bg-[#4D1D00] text-[#FFE6BA] ml-auto" : "bg-white"
            } max-w-[85%]`}
        >
            <ReactMarkdown className="prose prose-sm max-w-none">
                {displayText}
            </ReactMarkdown>

            {isLong && !expanded && (
                <button
                    className="text-xs text-blue-600 mt-2"
                    onClick={() => setExpanded(true)}
                >
                    展开更多…
                </button>
            )}
        </div>
    );
}
