


// export const TableListEmployees = ({employees}) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Date Of birth</th>
//           <th>Start date</th>
//           <th>Street</th>
//           <th>City</th>
//           <th>State</th>
//           <th>Zip code</th>
//           <th>Department</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((employee, index) => (
//           <tr key={index}>
//             <td>{employee.firstName}</td>
//             <td>{employee.lastName}</td>
//             <td>{employee.dateOfBirth}</td> // toString
//             <td>{employee.startDate}</td> // ToIsoString
//             <td>{employee.street}</td>
//             <td>{employee.city}</td>
//             <td>{employee.state}</td>
//             <td>{employee.zipCode}</td>
//             <td>{employee.department}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }