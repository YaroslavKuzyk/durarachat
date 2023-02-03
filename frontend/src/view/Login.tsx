import { FC, useContext, useState } from "react";
import Logo from "../assets/image/Logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Login: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {store} =  useContext(Context)

  return (
    <div className="sign">
      <img className="logo" src={Logo} alt="logo" />
      <div className="sign-inputs">
        <div className="sign-inputs__item">
          <span>Email:</span>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="sign-inputs__item">
          <span>Password:</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="sign-button" onClick={() => store.login(email, password)}>Enter</button>
      </div>

      <div className="go-sign">
        You don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default observer(Login);
