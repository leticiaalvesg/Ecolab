import React, { useState } from "react";

function LoginForm({ title, buttonText }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login enviado!\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Bem-vindo ao Ecolab</h2>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      {/* Texto do botão também vem das props */}
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default LoginForm;


