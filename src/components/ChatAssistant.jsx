import { useState } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">AI Travel Assistant</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2 rounded">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
            <p className="p-2 inline-block bg-gray-200 rounded">{m.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={() => {
          setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "This is a mock reply." }]);
          setInput("");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}