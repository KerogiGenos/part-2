import React from "react";

// const Header = ({course}) => {
//   return ( <div>
//       <h2 > 
//           {course[0].name} 
//       </h2> 
// </div>
// )
// }

const Parts = ({course}) => {
    return (
      <>
        <h2>
            {course[1].name}
            </h2>
        <div>
           {course[0].parts.map(part =>  
                   <p key={part.id}> {part.name}  {part.exercises} </p>         
           )}
        </div>
        <h4>Total of 
                {course[0].parts.reduce(
                  (part ,value) => 
  
                {
                   console.log('what is happening', part, value);
                    return  part + value.exercises
                 },  0
              
              )
             }
  
             exercises
            </h4>
  
            <h2>
            {course[1].name}
            </h2>
            <div>
           {course[1].parts.map(part =>  
                   <p key={part.id}> {part.name}  {part.exercises} </p>         
           )}
        </div>
        <h4>Total of 
                {course[1].parts.reduce(
                  (part ,value) => 
  
                {
                   console.log('what is happening', part, value);
                    return  part + value.exercises
                 },  0
              
              )
             }
  
             exercises
            </h4>
        </>
  )
  }
  
   
  
  // const Total=({course})=>{
  
  //   return(
  //       <div>
  //           <h4>Total of 
  //               {course.parts.reduce(
  //                 (part ,value) => 
  
  //               {
  //                  console.log('what is happening', part, value);
  //                   return  part + value.exercises
  //                },  0
              
  //             )
  //            }
  
  //            exercises
  //           </h4>
  
  //        </div>
  //    )
  // }
  
  const Content = ({course}) => {
    return ( <div >
        <Parts course={course}/>
        {/* <Total course={course} /> */}
    </div>
    )
  }
  
  
  const Course=({course})=>{
  
    return(
        <div>
            {/* <Header course={course}/> */}
  
            <Content course={course} />
        </div>
    )
  }

  export default Course