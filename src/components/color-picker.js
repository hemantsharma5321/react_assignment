const ColorPicker = (props) => {
  const style = {
    display: "inline-block",
    backgroundColor: props.colcode,
    width: "100px",
    height: "100px",
    marginLeft: "10px",
    boxShadow:"5px 5px 4px #888888"
  };
  return (
    <div className="inline">
      <div style={style}></div>
      <div style={{marginLeft:"10px"}}><span>#007623</span> <br/> <span style={{color:props.color}}>{props.color}</span></div>
    </div>
  );
};
export default ColorPicker;
