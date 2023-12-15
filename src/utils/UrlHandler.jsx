const UrlHandler = (query, country) => {
  const apikey = import.meta.env.VITE_API_KEY;
  // let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
  let url = `https://newsapi.org/v2/top-headlines?q=${query}&country=${country}&apiKey=${apikey}`;

  // if (country) {
  //   url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`;
  // }
  return url;
};
export default UrlHandler;
