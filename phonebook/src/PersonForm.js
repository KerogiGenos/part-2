import React from 'react'

const PersonForm = ({addPerson, newName, newNumber, name, number}) => {
    return (
        <>
        <form onSubmit={addPerson} >
        <div>
        name: <input value={newName} onChange={name} />
        </div>
        <div>number: <input value={newNumber} onChange={number} /></div>
        <div>
        <button type="submit">add</button>
        </div>
        </form>
        </>

    )
}




export default PersonForm