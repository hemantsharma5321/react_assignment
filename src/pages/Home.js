import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <Link to="/Page1">Jsx-001</Link>
            <Link to="/Page2">Jsx-002</Link>
            <Link to="/componentAssign">Component-001</Link>
            <Link to="/props-002">Props-001</Link>
            <Link to="/props-001">Props-002</Link>
            <Link to="/States-001">States-001</Link>
        </div>
    )
}
export default Home;