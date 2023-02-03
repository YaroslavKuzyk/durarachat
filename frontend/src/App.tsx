import { FC, useContext, useEffect } from "react";
import "./assets/styles/main.scss";
import Chat from "./view/Chat";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import { Routes, Route } from "react-router-dom";
import { Context } from "./index";
import { observer } from "mobx-react-lite";


const App: FC = () => {
  const  {store} = useContext(Context)

  useEffect(()=> {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])

  if(store.isAuth) {
    return (
      <Chat />
    )
  }
  if(store.loader) {
    return (
      <div>loading...</div>
    )
  }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default observer(App);
