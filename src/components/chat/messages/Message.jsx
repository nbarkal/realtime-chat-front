import "./message.css";

const Message = (props) => {
  const message = props.message;
  const userId = props.user.id;
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={userId === message.user.id ? "right" : "left"}>
      <div className={userId === message.user.id ? "current-user" : "other_user"}>
        <div className={userId === message.user.id ? "username" : "other_username"}>
          <p>{capitalizeFirstLetter(message.user.username)}</p>
          <p>:</p>
        </div>
        <p className="message-username">{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
