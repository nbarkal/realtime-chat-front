import { useState } from "react";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");
  console.log(props);

  const sendMessage = (e) => {
    e.preventDefault();
    fetch("http://192.168.50.130:8000/api/chat-messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: props.user.id,
        message: message,
      }),
    });
    setMessage("");
  };

  return (
    <form onSubmit={sendMessage} className="send-message">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Type your message here..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
