let apiKey = "0aa34b875ebe423394fd4d62e5e119f4";

const fetchTopHeadlineApi = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    let result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};
