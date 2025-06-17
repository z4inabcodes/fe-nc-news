import { useEffect, useState } from "react"
import { getArticlesById } from "../../api"
import { useParams } from "react-router"


export default function ArticleCard (){
    const [getArticleById,setArticleById]=useState([])
    const [isLoading,setLoading]=useState(false)
    const [error, setError] = useState(false);
    const {article_id} = useParams()

    useEffect(()=>{
       setLoading(true)
       setError(false)

       getArticlesById(article_id).then((data)=>{
           setArticleById(data)
           setLoading(false)
       }) .catch((err) => {
         setError("");
         setLoading(false);
       });
   }, [article_id]);
 if (error){
    return <div className="err"><p>Error!</p></div>
 }
    return <div className="article-card">
   <h3>{getArticleById.title}</h3>
          <img src={getArticleById.article_img_url} alt={getArticleById.title} />
          <p>by {getArticleById.author}</p>
          <p><button>🤍{getArticleById.votes}</button></p>
        
    </div>
}