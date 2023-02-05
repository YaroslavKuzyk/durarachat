import { FC, useContext, useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import Message from "../components/Message";
import NewUser from "../components/NewUser";
import * as uuid from "uuid";
import { Context } from "../index";
import Login from "./Login";

const Chat: FC = () => {
  const { store } = useContext(Context);
  const socket: any = useRef();
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:8000");

    socket.current.onopen = () => {
      const message = {
        event: "connection",
        name: store.user.name,
        avatar: store.user.avatar,
      };

      socket.current.send(JSON.stringify(message));
    };

    socket.current.onmessage = (event: any) => {
      const message = JSON.parse(event.data);
      setMessages((prev: any) => [message, ...prev]);
    };
  }, []);

  function sendMessage() {
    if (text) {
      const message = {
        event: "message",
        name: store.user.name,
        avatar: store.user.avatar,
        message: text,
      };

      socket.current.send(JSON.stringify(message));
      setText("");
    }
  }

  if (!store.isAuth || !store.user.isActivated) {
    return <Login />;
  }

  return (
    <div>
      <div className="chat-input-wrapper">
        <div className="chat-input">
          <button className="chat-input__send" onClick={() => store.logout()}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#666666" />
              <g clipPath="url(#clip0_199_3)">
                <path
                  d="M30.9178 19.4492C30.9706 18.9729 30.9999 18.4901 30.9999 18C30.9999 17.51 30.9706 17.0271 30.9178 16.5513C29.7444 16.5773 28.6435 15.8394 28.2619 14.6658C27.8807 13.4921 28.3376 12.248 29.3022 11.5798C28.8212 10.7348 28.2507 9.94782 27.5994 9.23467C26.6655 9.9455 25.3406 9.99596 24.3422 9.2708C23.3435 8.54516 22.9823 7.27011 23.3703 6.16196C22.4982 5.76599 21.5768 5.45971 20.6148 5.26313C20.2778 6.38944 19.2352 7.21002 18 7.21002C16.7645 7.21002 15.7221 6.38944 15.3851 5.26313C14.4231 5.45971 13.5017 5.76599 12.6297 6.16196C13.0171 7.27011 12.6559 8.5451 11.6575 9.2708C10.6587 9.99645 9.33418 9.94575 8.40055 9.23461C7.74895 9.94751 7.17882 10.7348 6.69778 11.5798C7.66211 12.2486 8.11921 13.4921 7.7378 14.6658C7.35639 15.8399 6.25556 16.5773 5.08245 16.5513C5.02962 17.027 5 17.5099 5 18C5 18.49 5.02962 18.9729 5.08245 19.4492C6.25556 19.4232 7.35639 20.1606 7.7378 21.3342C8.11921 22.5083 7.66211 23.7519 6.69778 24.4201C7.17876 25.2651 7.74895 26.0521 8.40049 26.7653C9.33442 26.0549 10.6594 26.004 11.6575 26.7296C12.6562 27.4548 13.0171 28.7298 12.6294 29.8379C13.5014 30.2339 14.4229 30.5402 15.3851 30.7368C15.7221 29.6109 16.7647 28.7904 18 28.7904C19.2352 28.7904 20.2778 29.611 20.6146 30.7368C21.5766 30.5402 22.498 30.2344 23.37 29.8385C22.9826 28.7303 23.344 27.4548 24.3424 26.7291C25.341 26.004 26.6655 26.0542 27.5994 26.7653C28.2507 26.0529 28.8209 25.2656 29.3022 24.4206C28.3378 23.7519 27.8807 22.5078 28.2619 21.3341C28.6436 20.1609 29.7444 19.423 30.9178 19.4492ZM18 22.55C15.4873 22.55 13.45 20.5126 13.45 18C13.45 15.4873 15.4873 13.45 18 13.45C20.5128 13.45 22.55 15.4873 22.55 18C22.55 20.5126 20.5129 22.55 18 22.55Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_199_3">
                  <rect
                    width="26"
                    height="26"
                    fill="white"
                    transform="translate(5 5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="chat-input__input"
            type="text"
            placeholder="Your message"
          />
          <button className="chat-input__send" onClick={() => sendMessage()}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#666666" />
              <path
                d="M24.3247 21H11.6753C11.0767 21 10.7718 20.152 11.2009 19.6485L17.5256 12.2286C17.7854 11.9238 18.2146 11.9238 18.4744 12.2286L24.7991 19.6485C25.2282 20.152 24.9233 21 24.3247 21Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="message-wrapper">
        {messages.map((msg: any) =>
          msg.event === "connection" ? (
            <NewUser key={Date.now() + uuid.v4()} name={msg.name} />
          ) : (
            <div key={Date.now() + uuid.v4()} className="one-message">
              <Avatar avatar={msg.avatar} name={msg.name} />
              <Message style={msg.avatar} message={msg.message} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Chat;
