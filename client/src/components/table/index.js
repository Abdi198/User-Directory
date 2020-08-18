import React from 'react';
import { Table } from 'reactstrap';

const TableDisplay = (props) => {
  console.log(props.randomPeople, "results")
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th onClick={ props.handleClick}>First Name</th>
          <th  >Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
          
      {props.randomPeople.length>0 ? props.randomPeople.map((people) => {
        return (
         <tr >
           <td></td>
          <td> <img src={people.picture.thumbnail} /> </td>
        <td>{people.name.first}</td>
        <td>{people.name.last}</td>
        <td>{people.email}</td>
        <td>{people.phone}</td></tr>)
      }):
          (<tr><td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td></tr>)
      }

        
      </tbody>
    </Table>
  );
}

export default TableDisplay;