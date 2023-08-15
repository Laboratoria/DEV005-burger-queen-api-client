import'./buttons.css'
function Buttons(props) {
  return (
    <div>
      <button type="submit" onClick={props.onClick}>{props.tag}</button>
    </div>
  );
}
export default Buttons