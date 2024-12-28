import React, { useEffect } from "react";
import GetMe from "./components/GetMe";
import GetUser from "./components/GetUser";
import GetUpdates from "./components/GetUpdates";
import GetChatMembersCount from "./components/GetChatMembersCount";
import './App.css'
import Header from "./components/Header/Header";
import ProductList from "./components/Product/ProductList";
import Poke from "./components/Poke/Poke";

const App = () => {

  const tg = window.Telegram.WebApp;
  tg.expand(); // Растягивает Web App на весь экран

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      {/* <Header/> */}
      <GetUser />
      {/* <ProductList/> */}
      <Poke />
      {/* <GetUpdates/> */}
      {/* <GetMe /> */}
      {/* <GetChatMembersCount/> */}
      <button className="button-main" onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default App;
