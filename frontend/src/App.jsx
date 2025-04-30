import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [cep, setCep] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    document.body.className = temaEscuro ? 'dark' : '';
  }, [temaEscuro]);

  const handleInput = (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    if (valor.length > 5) valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
    setCep(valor);
  };

  const buscarCEP = async (e) => {
    e.preventDefault();
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido com 8 números.');
      setResultado(null);
      return;
    }

    try {
      const res = await fetch(`/api/cep/${cepLimpo}`);
      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || 'CEP inválido!');
        setResultado(null);
      } else {
        setResultado(data);
        setErro('');
      }
    } catch {
      setErro('Erro ao consultar o CEP.');
      setResultado(null);
    }
  };

  const alternarTema = (e) => {
    setTemaEscuro(e.target.checked);
  };

  return (
    <>
      <div className="tema-switch">
        <label className="switch">
          <span className="sun"></span>
          <span className="moon"></span>
          <input
            id="input"
            type="checkbox"
            className="input"
            onChange={alternarTema}
            checked={temaEscuro}
          />
          <span className="slider"></span>
        </label>
      </div>

      <h1 className="titulo">Consulta de CEP</h1>

      <form className="formulario" onSubmit={buscarCEP}>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={handleInput}
          className={erro ? "erro-input" : ""}
          placeholder="Ex: 13400-200"
          required
        />
        <button type="submit">Buscar</button>
      </form>

      {erro && <p className="mensagem erro">{erro}</p>}

      {resultado && (
        <div className="container-resultado-mapa">
          <section id="resultado">
            <strong className="mensagem sucesso">CEP Válido!</strong>
            <p><b>Rua:</b> {resultado.street}</p>
            <p><b>Bairro:</b> {resultado.neighborhood}</p>
            <p><b>Cidade:</b> {resultado.city}</p>
            <p><b>Estado:</b> {resultado.state}</p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${resultado.street}, ${resultado.city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-maps"
            >
              Visualizar no Maps
            </a>
          </section>

          <div className="mapa-container">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${resultado.street}, ${resultado.city}`)}&output=embed`}
              loading="lazy"
              title="Mapa"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
