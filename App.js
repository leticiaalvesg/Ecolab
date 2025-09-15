import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <LoginForm title="Login do Usuário" buttonText="Entrar" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
