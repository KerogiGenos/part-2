import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const name=(name)=>{
    setNewName(name.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
    const noteObject = {

      name: newName,
      id:1
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={name} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names)=>{
        return <div> {names.name}</div>
      })}
    </div>
  )
}

export default App