import'./buttons.css'
function Buttons(props) {
  return (
    <div>
      <button type="submit">{props.tag}</button>
    </div>
  );
}
export default Buttons