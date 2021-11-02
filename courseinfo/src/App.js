import React from 'react'

const Header = ({course}) => {
  return ( <div>
      <h1 > 
          {course.name} 
      </h1> 
</div>
)
}

const Parts = ({course}) => {
  return (
      <div>
         {course.parts.map(part =>  
                 <p key={part.id}> {part.name}  {part.exercises} </p>         
         )}
      </div>
)
}

 

const Total=({course})=>{

  return(
      <div>
          <h4>Total of 
              {course.parts.reduce(
                (part ,value) => 

              {
                 console.log('what is happening', part, value);
                  return  part + value.exercises
               },  0
            
            )
           }

           exercises
          </h4>

       </div>
   )
}

const Content = ({course}) => {
  return ( <div >
      <Parts course={course}/>
      <Total course={course} />
  </div>
  )
}


const Course=({course})=>{

  return(
      <div>
          <Header course={course}/>

          <Content course={course} />
      </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}


export default App;
