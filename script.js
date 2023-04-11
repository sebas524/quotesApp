// * get quotes from api:
let fetchedQuotesData = [];

const getQuotes = async () => {
  const URL = "https://type.fit/api/quotes";

  try {
    const res = await fetch(URL);
    fetchedQuotesData = await res.json();
    Quote();
  } catch (err) {
    alert(err);
  }
};
// * get a random quotes from the data you received:
const Quote = () => {
  const quote =
    fetchedQuotesData[Math.floor(Math.random() * fetchedQuotesData.length)];
  console.log(quote);
};

// * when page loads:
getQuotes();
