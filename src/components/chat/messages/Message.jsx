import './message.css';

const Message = (props) => {
  const message = props.message;
  const userId = 2;
  return (
    <div className={userId === message.user.id ? 'current-user' : 'other_user'}>
      <span>
        {message.user.username}
        </span>
      <span className="message-username">
        {message.message}
        </span>
    </div>
  );
};

export default Message;
