import { useState } from "react";
import ChatFeed from "./ChatFeed.jsx";
import ChatInput from "./ChatInput";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // 发送消息
    const sendMessage = async (text) => {
        if (!text.trim() || isLoading) return;

        setIsLoading(true); // 锁定输入

        // 添加用户消息
        const newMsg = { role: "user", content: text };
        setMessages((m) => [...m, newMsg]);

        try {
            const resp = await fetch("http://localhost:8080/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "tngtech/tng-r1t-chimera:free",
                    messages: [{ role: "user", content: text }],
                }),
            });

            const json = await resp.json();
            const aiContent = json?.data?.content || "（AI 未返回内容）";

            // 添加 AI 回复
            setMessages((m) => [
                ...m,
                { role: "assistant", content: aiContent }
            ]);
        } catch (err) {
            setMessages((m) => [
                ...m,
                { role: "assistant", content: "服务器异常，请稍后再试 🙏" },
            ]);
        } finally {
            setIsLoading(false); // 解锁输入
        }
    };

    return (
        <>
            {/* 浮动按钮 */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 bg-[#4D1D00] hover:bg-[#603423] text-[#FFE6BA] shadow-xl p-4 rounded-full transition"
            >
                <FiMessageCircle size={26} />
            </button>

            {/* 浮窗聊天组件 */}
            {open && (
                <div className="fixed bottom-20 right-6 w-[350px] h-[500px] bg-white shadow-2xl rounded-2xl border border-[#4D1D00] flex flex-col overflow-hidden z-50">

                    {/* Header */}
                    <div className="bg-[#4D1D00] text-[#FFE6BA] p-3 flex items-center justify-between">
                        <span className="font-semibold">Cancer Helper 🌿</span>
                        <FiX
                            size={20}
                            className="cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    </div>

                    {/* 对话内容 */}
                    <ChatFeed messages={messages} />

                    {/* 输入框（锁定控制） */}
                    <ChatInput onSend={sendMessage} disabled={isLoading} />
                </div>
            )}
        </>
    );
}
