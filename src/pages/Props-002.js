import ColorPicker from "../components/color-picker";

const Props = (props) => {
  return (
    <>
      <h1>props-001</h1>
      <div className="flex">

      
      <ColorPicker color="Pink" colcode="#ff6663" />
      <ColorPicker color="grey" colcode="#333333"/>
      <ColorPicker color="Black" colcode="#000000" />
      <ColorPicker color="Green" colcode="#38bb14" />
      <ColorPicker color="red" colcode="#c90b0b" />
      <ColorPicker color="orange" colcode="#ff8000"/>
      <ColorPicker color="Yellow" colcode="#FFF500" />
      <ColorPicker color="Light Gray" colcode="#cccccc" />
      <ColorPicker color="purple" colcode="#7E41E2" />
      <ColorPicker color="Brown" colcode="#C14911" />
      </div>
    </>
  );
};
export default Props;
