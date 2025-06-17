
import './App.css'
import ArticleCard from './assets/components/ArticleCard'
import Articles from './assets/components/Articles'
import Header from './assets/components/Header';
import {Route, Routes}from "react-router-dom";

function App() {


  return (
    
    <div>
      
    <Header/>

      <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:article_id" element={<ArticleCard />} />
    </Routes>
 
    </div>
  )
}

export default App
