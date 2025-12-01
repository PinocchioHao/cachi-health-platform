import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ChatInput({ onSend, disabled }) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim() || disabled) return;

        onSend(text);
        setText("");
    };

    return (
        <div className="p-3 border-t flex gap-2 items-center bg-white">
            <input
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none disabled:bg-gray-100"
                placeholder="输入内容..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                }}
            />
            <button
                onClick={handleSend}
                disabled={disabled}
                className={`px-4 py-2 rounded-lg ${
                    disabled
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#4D1D00] text-[#FFE6BA] hover:bg-[#603423]"
                }`}
            >
                <FiSend size={18} />
            </button>
        </div>
    );
}
