import ramsetu from "../images/RamSetu.jpg";
import {TiHeartOutline} from "react-icons/ti";
import { AiOutlineShareAlt} from "react-icons/ai";
import { BsFillChatLeftFill} from "react-icons/bs";
const MovieCard = (props) => {
  return (
    <div className="card">
      
      <div style={{width:"60%"}}>
       <img src={ramsetu} alt=" v" style={{width:"100px" , height:"150px", float:"left", margin:"5px"}}></img>
       
       
        <h4>{props.movie.Title}</h4>
        <p>{props.movie.Year +", "+ props.movie.Director}</p>
        <p>{props.movie.Actors}</p>
        <br/>
        <p>{props.movie.Plot}</p>
        <br/>
        <p><TiHeartOutline/>&nbsp;<AiOutlineShareAlt/>&nbsp;<BsFillChatLeftFill/></p>
      </div>
      <div className="cardImg"><img src={ramsetu} alt="v"></img></div>
      
    </div>
     
   
  );
};
export default MovieCard;
