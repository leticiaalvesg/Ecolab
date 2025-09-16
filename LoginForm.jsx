import React, { useState } from "react";

function LoginForm({ title = "Bem-vindo ao Ecolab", buttonText = "Entrar" }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login enviado!\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>{title}</h2>

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

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default LoginForm;



