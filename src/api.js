import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-8yeg.onrender.com"
});
const getArticlesApi = () => {
    return api.get("/api/articles").then(({ data }) => {
    
      return data.articles;
      
    });
  };
  const getArticlesById = (article_id) => { 
    if(article_id===undefined){
      {msg:'if not found}'
    }}
    return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    console.log(data ,'id one')
      return data.article;
      
    });
  };
  
  export{getArticlesApi,getArticlesById}