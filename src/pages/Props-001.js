import MovieCard from "../components/MovieCard";
import { movieList } from "../util";
const Props1 = (props) => {
  
  return (
    <>
      <h1>props-002</h1>
      <div className="cardContainer">
     { movieList.map((movie, idx)=>{
      return <MovieCard key={idx} movie={movie}/>
     })}
     </div>
    </>
  );
};
export default Props1;
