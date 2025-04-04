import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-8yeg.onrender.com"
});
const getArticlesApi = () => {
    return api.get("/api/articles").then(({ data }) => {
    
      return data.articles;
      
    });
  };

  export{getArticlesApi}