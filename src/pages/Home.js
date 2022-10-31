import { Link } from "react-router-dom";
import Page1 from "./page1";
const Home=()=>{
    return(
        <div>
            <Link to="/Page1">Jsx-001</Link>
            <Link to="/Page2">Jsx-002</Link>
        </div>
    )
}
export default Home;