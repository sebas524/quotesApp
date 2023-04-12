//* html targetted ids:

const containerQuote = document.getElementById("container-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-btn");
const nextQuoteBtn = document.getElementById("next-quote-btn");
const loader = document.getElementById("loader");

// * get quotes from api:
let fetchedQuotesData = [];

const getQuotes = async () => {
  loading();

  const quotesURL = "https://type.fit/api/quotes";

  try {
    const res = await fetch(quotesURL);
    fetchedQuotesData = await res.json();
    Quote();
  } catch (err) {
    alert(err);
  }
};
// * get a random quotes from the data you received:
const Quote = () => {
  loading();
  if (loader.hidden && containerQuote.hidden) {
    !loader.hidden;
    !containerQuote.hidden;
  }
  const quoteFromApi =
    fetchedQuotesData[Math.floor(Math.random() * fetchedQuotesData.length)];
  console.log(quoteFromApi);
  //   * DOM implementation:
  quote.textContent = quoteFromApi.text;
  //   * if null data:
  if (quoteFromApi.author === null) {
    return (author.textContent = "unknown");
  } else {
    author.textContent = quoteFromApi.author;
  }
  //   * if length of quote...:
  if (quoteFromApi.text.length > 50) {
    quote.classList.add("long-quote");
  }

  complete();
};

// * to show loading :
const loading = () => {
  loader.hidden = false;
  containerQuote.hidden = true;
};

// * to hide loading :
const complete = () => {
  loader.hidden = true;
  containerQuote.hidden = false;
};

// * tweeting:
const tweetTheQuote = () => {
  const tweeterURL = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
  window.open(tweeterURL, "_blank");
};

// !EVENT LISTENERS:
nextQuoteBtn.addEventListener("click", Quote);
twitterBtn.addEventListener("click", tweetTheQuote);

// * when page loads:
getQuotes();
