import React from "react";

/* Dummy Messages Panel */
interface Message {
  name: string;
  time: string;
  text: string;
}
const messages: Message[] = [
  {
    name: "Johne",
    time: "10:10",
    text: "Morbi quis ex eu arcu auctor sagittis."
  }
];
function MessagesPanel() {
  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded-lg">
          <h3 className="text-sm font-semibold">{msg.name}</h3>
          <p className="text-xs text-gray-600">{msg.text}</p>
          <span className="text-xs text-gray-400">{msg.time}</span>
        </div>
      ))}
    </div>
  );
}


export default MessagesPanel
