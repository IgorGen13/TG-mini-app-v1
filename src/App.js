import React from "react";
import GetUser from "./components/GetUser";
import './App.css'
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
