let apiKey = "0aa34b875ebe423394fd4d62e5e119f4";

const fetchTopHeadlineApi = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    let result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

const generateHeadlineList = async () => {
  let headlines = await fetchTopHeadlineApi();
  let articles = headlines.articles;
  let topHeadLinesElement = document.querySelector(".top-headlines-part");
  let headLineItem = `<ul></ul>`;
  if (articles.length > 10) {
    articles.length = 10;
    articles.map((item) => {
      console.log(item);
      headLineItem = headLineItem + `<li>${item.source.name}</li>`;
    });
  } else {
    articles.map((item) => {
      console.log(item);
    });
  }
  headLineItem = headLineItem + `</div>`;
  // topHeadLinesElement.innerHTML = headLineItem;
};

generateHeadlineList();
