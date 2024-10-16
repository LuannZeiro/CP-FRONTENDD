import React from 'react';

const Perfil = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Informações do Perfil</h1>
      <br />
      <div>
        <h2>Nome: Luann Mariano</h2>
        <p>Email: rm558548@fiap.com.br</p>
        <p>Data de Nascimento: 22/06/2003</p>
      </div>
      <br />
      <h3>Interesses</h3>
      <ul>
        <li>Programação</li>
        <li>Viagens</li>
        <li>Games</li>
      </ul>
    </div>
  );
};

export default Perfil;
