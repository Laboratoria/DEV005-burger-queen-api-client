import'./buttons.css'
function Buttons(prop) {
  return (
    <div>
      <button type="submit" onClick={prop.onClick}>{prop.tag}</button>
    </div>
  );
}
export default Buttons