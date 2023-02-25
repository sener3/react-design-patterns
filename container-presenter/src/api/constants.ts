export const baseUrl = (keyword: string) => `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
