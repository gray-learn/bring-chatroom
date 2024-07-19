import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

interface Message {
  userName: string;
  text: string;
  timestamp: string;
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessage: Message = {
        userName: username,
        text: inputText,
        timestamp: new Date().toLocaleString(),
      };
      socket.emit("chat message", newMessage);
      setInputText("");
    }
  };

  useEffect(() => {
    socket.on("chat message", (msg: Message) => {
      setMessages((prevMes) => [...prevMes, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  return (
    <>
      <div>
        <h1>ChatRoom</h1>
        {messages.map((m, index) => (
          <div key={index}>
            <p>
              <strong>{m.userName}</strong>:{m.text}
              {m.timestamp}
            </p>
          </div>
        ))}
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Please type"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
