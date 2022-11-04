const MovieCard = (props) => {
  return (
    <div className="card">
      {console.log(props.movie)}
      <div style={{width:"60%"}}>
        <h4>{props.movie.Title}</h4>
        <p>{props.movie.Year +", "+ props.movie.Director}</p>
        <p>{props.movie.Actors}</p>
        <p>{props.movie.Plot}</p>
      </div>
      <div className="cardImg">image</div>
      
    </div>
     
   
  );
};
export default MovieCard;
