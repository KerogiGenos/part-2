import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Persons from './Persons'

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

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} name={name} number={number}/>

     
      <h2>Numbers</h2>
     
      <Persons persons={persons} />
    </div>
  )
}

export default App