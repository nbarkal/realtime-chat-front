import { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat.jsx";
import Auth from "./components/Auth.jsx";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="body">
      {isAuth ? ( <Chat /> ) : ( <Auth/> )}
    </div>
  );
}

export default App;
