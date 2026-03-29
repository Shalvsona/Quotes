const container = document.getElementById("Quotes API");

async function getQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    displayQuotes(data.quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

function displayQuotes(quotes) {
  container.innerHTML = "";
  quotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");

    quoteElement.innerHTML = `
        <p class="quote-text">"${quote.quote}"</p>
        <p class="quote-author">— ${quote.author}</p>
        `;
    container.appendChild(quoteElement);
  });
}

getQuotes();
