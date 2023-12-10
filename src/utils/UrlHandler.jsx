const UrlHandler = (query) => {
  const apikey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
  return url;
};
export default UrlHandler;
