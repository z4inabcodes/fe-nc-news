import { useEffect, useState } from "react"
import { getArticlesApi } from "../../api"
import { Link } from "react-router-dom";

export default function Articles (){
 const [getArticles,setArticles]=useState([])
 const [isLoading,setLoading]=useState(false)
 const [error, setError] = useState(false);
 useEffect(()=>{
    setLoading(true)
    setError(false)
    getArticlesApi().then((data)=>{
        setArticles(data)
        setLoading(false)
    }) .catch((err) => {
      setError("");
      setLoading(false);
    });
}, []);

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p style={{ color: "red" }}>Failed to load articles. Please try again</p>;
}

 console.log(getArticles)

    return <div className="articles-container">
    <ul>
      {getArticles.map((article) => (
        <li key={article.article_id
        } className="article">
          <h3>{article.title}</h3>
          <img src={article.article_img_url} alt={article.title} />
          <button>
            <Link className="Link" to={`/article/${article.id}`}>Read More</Link>
          </button>
          <p><button>🤍{article.votes}</button></p>
        </li>
      ))}
    </ul>
  </div>
}