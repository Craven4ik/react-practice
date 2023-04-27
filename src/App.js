import './App.css';
import React from "react";
import Image from "./Components/Image";
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Nav from "./Components/Nav";
import Chat from "./Components/Chat";
import Toggle from "./Components/Toggle";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Nav />
          <Routes>
              <Route path="/" element={<Header text={"React"} />}/>
              <Route path="/image" element={<Image src={"https://abrakadabra.fun/uploads/posts/2022-02/1644363444_1-abrakadabra-fun-p-otkusannaya-pechenka-1.jpg"}/>} />
              <Route path="/chat" element={<Chat />}/>
              <Route path="/toggle" element={<Toggle />}/>
          </Routes>
      </header>

    </div>
    </Provider>
  );
}

export default App;
