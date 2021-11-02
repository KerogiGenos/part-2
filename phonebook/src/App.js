import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 12345678 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState()

  const name=(name)=>{
    setNewName(name.target.value)
  }

  const number=(number)=>{
    setNewNumber(number.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
    const noteObject = {

      name: newName,
      number:newNumber
      
      
    }
    setPersons(persons.concat(noteObject))
    const isPerson =persons.some(p=>p.name===newName)

      if(isPerson){
      window.alert(`${newName} is already part of the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={name} />
        </div>
        <div>number: <input value={newNumber} onChange={number} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names)=>{
        return <div> <p key={names.name}>{names.name} {names.number} </p></div>
      })}
    </div>
  )
}

export default App