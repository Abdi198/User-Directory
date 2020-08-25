import React from 'react';
 

function TableDisplay  (props)  {
  console.log(props.randomPeople, "results")
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th >First Name</th>
          <th onClick={props.handleClick} >Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
          {console.log("table: " , props.randomPeople)}
      { props.randomPeople.map((people, index) => {
        return (
         <tr key={index} >
           <td>{index+1}</td>
          <td> <img src={people.picture.thumbnail} alt = "picture" /> </td>
        <td>{people.name.first}</td>
        <td>{people.name.last}</td>
        <td>{people.email}</td>
        <td>{people.phone}</td></tr>)
      }) 
      }

        
      </tbody>
    </table>
  );
}

export default TableDisplay;