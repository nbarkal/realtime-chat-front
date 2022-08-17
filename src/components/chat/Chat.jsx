import { useEffect, useState } from "react";
import "./chat.css";
import Message from "./messages/Message";

const Chat = () => {
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    fetch("http://192.168.50.130:8000/api/chat-messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  return (
    <div className="chat">
      <h1>REALTIME CHAT</h1>
      <div>{messages && messages.map((message) => <Message message={message} key={message.id}/>)}</div>
    </div>
  );
};

export default Chat;
