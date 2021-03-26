import './App.css';
import { useState } from 'react'
import axios from 'axios'

const initialValue = {
  name: "",
  email: "",
}


function App() {

  const [values, setValues] = useState (initialValue)

  function onChange(e) {
    const { name, value} = e.target
    
    setValues({...values, [name]: value})
  }
  console.log(values)

  function onSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:3001/model_client', values)
    .then((response)=>{
      console.log(response)
    })

  }


  return (
    <div className="App">
      <h1>Cadastro de clientes</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" onChange={onChange}/><br/>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={onChange}/><br/>
        <button type="submit">Salvar</button>

      </form>
    </div>
  );
}

export default App;
