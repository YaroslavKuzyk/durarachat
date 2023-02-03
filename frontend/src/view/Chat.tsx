import { FC, useContext } from "react";
import Avatar from "../components/Avatar";
import ChatInput from "../components/ChatInput";
import Message from "../components/Message";
import NewUser from "../components/NewUser";
import { Context } from "../index";
import Login from "./Login";


const Chat: FC = () => {
  const {store} =  useContext(Context)

  if(!store.isAuth || !store.user.isActivated) {
    return (
      <Login />
    )
  }


  return (
    <div>
      <ChatInput />
      <div className="message-wrapper">
      <button onClick={() => store.logout()}>Logout</button>
        <NewUser name="Yaroslav" />
        <div className="one-message">
          <Avatar avatar="admin" name="admin" />
          <Message style="admin" message="admin" />
        </div>
        <div className="one-message">
          <Avatar avatar="nine" name="nine" />
          <Message style="nine" message="nine" />
        </div>
        <div className="one-message">
          <Avatar avatar="eigth" name="eigth" />
          <Message style="eigth" message="eigth" />
        </div>
        <div className="one-message">
          <Avatar avatar="seven" name="seven" />
          <Message style="seven" message="seven" />
        </div>
        <div className="one-message">
          <Avatar avatar="six" name="six" />
          <Message style="six" message="six" />
        </div>
        <div className="one-message">
          <Avatar avatar="five" name="five" />
          <Message style="five" message="five" />
        </div>
        <div className="one-message">
          <Avatar avatar="four" name="four" />
          <Message style="four" message="four" />
        </div>
        <div className="one-message">
          <Avatar avatar="three" name="three" />
          <Message style="three" message="three" />
        </div>
        <div className="one-message">
          <Avatar avatar="two" name="two" />
          <Message style="two" message="two" />
        </div>
        <div className="one-message">
          <Avatar avatar="one" name="One" />
          <Message style="one" message="One" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
