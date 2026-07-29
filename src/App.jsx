import { useState } from "react";

const quotesData = [
  {
    text: "A vida é o que acontece enquanto você faz outros planos.",
    author: "John Lennon",
  },
  {
    text: "O único modo de fazer um excelente trabalho é amar o que você faz.",
    author: "Steve Jobs",
  },
  {
    text: "Seja a mudança que você quer ver no mundo.",
    author: "Mahatma Gandhi",
  },
  {
    text: "No meio da dificuldade encontra-se a oportunidade.",
    author: "Albert Einstein",
  },
  {
    text: "Tudo o que a mente humana pode conceber e acreditar, ela pode conquistar.",
    author: "Napoleon Hill",
  },
];

function App() {
  const [quote, setQuote] = useState(quotesData[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div id="wrapper">
      <div id="quote-box">

        <h1>Gerador de Frases</h1>

        <p id="text">
          "{quote.text}"
        </p>

        <p id="author">
          - {quote.author}
        </p>

        <div className="actions">

          <a
            id="tweet-quote"
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar frase no Twitter"
          >
            Tweetar
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