import React from 'react'

const Persons = ({persons}) => {
    return (
        <div>
            {persons.map(names=>
             <p key={names.name}>{names.name} {names.number} </p>
          )}
        </div>
    )
}

export default Persons