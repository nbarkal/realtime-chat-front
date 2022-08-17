import { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat.jsx";
import Auth from "./components/Auth.jsx";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="body">
      {isAuth ? ( <Chat user={user}/> ) : ( <Auth setUser={setUser} setIsAuth={setIsAuth}/> )}
    </div>
  );
}

export default App;
