import Button  from './Button'

 const TopBar = () => {
  return (
    <div className="topBar">
    <Button className="break" text='Desayuno'></Button>
    <Button className="break" text='Almuerzo'></Button>
    <Button className="break" text='Pedidos'></Button>
    </div>
  )
}
export default TopBar