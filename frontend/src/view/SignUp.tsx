import React, { FC, useState, useContext } from "react";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const SignUp: FC = () => {
  const { store } = useContext(Context);

  const [avatar, setAvatar] = useState<string[]>([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eigth",
    "nine",
  ]);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [activeAvatar, setActiveAratar] = useState<string>("one");

  const chooseAvatar = (
    el: React.MouseEvent<HTMLButtonElement>,
    str: string
  ) => {
    el.preventDefault();
    setActiveAratar(str);
  };

  return (
    <div className="sign">
      <div className="sign-inputs">
        <div className="choose-avatar">
          {avatar.map((item) => (
            <button
              key={Date.now() + item}
              onClick={(el) => chooseAvatar(el, item)}
              className={
                item === activeAvatar
                  ? "choose-avatar-active"
                  : "" + "chose-avatar__item"
              }
            >
              <Avatar avatar={item} />
            </button>
          ))}
        </div>
        <div className="sign-inputs__item">
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sign-inputs__item">
          <span>Username:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sign-inputs__item">
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="sign-button"
          onClick={() =>
            store.registration(email, name, password, activeAvatar)
          }
        >
          Enter
        </button>
      </div>

      <div className="go-sign">
        You have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default observer(SignUp);
