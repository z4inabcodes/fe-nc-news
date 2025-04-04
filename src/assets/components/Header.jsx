
import { Link } from "react-router-dom";
export default function Header (){
    return <div className="header"><header><button>Header</button> <button><Link className="Link" to="/articles">
            Articles
          </Link></button></header>
    
    </div>
}