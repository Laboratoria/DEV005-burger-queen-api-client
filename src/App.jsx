import './App.css'
import { Users } from './Usefetch'

function App() {
  const { dataUsers } = Users('http://localhost:8080/users')
  console.log(dataUsers)
  return (
    <>
      <div>
       
      </div>

    </>
  )
}

export default App
