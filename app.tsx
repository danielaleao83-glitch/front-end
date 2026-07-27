import React, { useState, useEffect } from 'react';
// import './App.css';

// Lista de frases para o gerador
const quotesData = [
  { text: "A vida é o que acontece enquanto você faz outros planos.", author: "John Lennon" },
  { text: "O único modo de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { text: "Seja a mudança que você quer ver no mundo.", author: "Mahatma Gandhi" },
  { text: "No meio da dificuldade encontra-se a oportunidade.", author: "Albert Einstein" },
  { text: "Tudo o que a mente humana pode conceber e acreditar, ela pode conquistar.", author: "Napoleon Hill" }
];

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  // Função para selecionar uma frase aleatória
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  // Carrega uma frase inicial ao montar o componente
  useEffect(() => {
    getRandomQuote();
  }, []);

  // Formata o link do Twitter com a frase atual
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div id="wrapper">
      <div id="quote-box">
        {/* Texto da citação */}
        <p id="text">{quote.text}</p>
        
        {/* Autor da citação */}
        <p id="author">- {quote.author}</p>
        
        {/* Ações: Novo Botão e Link do Twitter */}
        <div className="actions">
          <a 
            id="tweet-quote" 
            href={twitterUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Tweetar Frase
          </a>
          
          <button 
            id="new-quote" 
            onClick={getRandomQuote}
          >
            Nova Frase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
