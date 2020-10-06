// import React, {useState,useEffect}  from "react";
// import ContactRegister from  './ContactRegister'
// import firebaseDB from '../firebase'
// import create from '@material-ui/core/icons/create';
// const Contacts = () => {
//     var [contactObjects,setContactObjects]= useState({})
// var [cuurentId,setCurrentId]=useState('')
//     useEffect(() => {
//         firebaseDB.child('contacts').on(
//             'value',snapshot =>{
//                 if(snapshot.val()!=null)
//                 setContactObjects({
//                     ...snapshot.val()
//                 })
//             }
//         )
//     }, [])//a similar to componet didamount
//     const addorEdit =obj=>{
//         firebaseDB.child('contacts').push(
//             obj,
//             err =>
//             {
//                 if(err)
//                 console.log(err)
//             }
//         )
//     }
//     return (
//        < React.Fragment>
//         <div className="row">
//             < div className="col-md-8 offset-md-1">
//     <div class="jumbotron jumbotron-fluid">
//     <div class="container">
//       <h1 class="display-4">Contacts</h1>
//       </div>
//   </div>
//   <div className="row">
//             < div className="col-md-5  ">
//            < ContactRegister {...({addorEdit,cuurentId,contactObjects})}/>
//             </div>
//             <div className="col-md-7">
//                  <table className="table table-borderless table-strpped"> 
//                  <thead className="thead-light">
//                      <tr >
//                          <th >
//                              Full Name
//                          </th>
//                          <th >
//                              Mobile
//                          </th>
//                          <th >
// Email
//                          </th>
//                          <th >
//                              Actions
//                          </th>
//                      </tr>
//                  </thead>
//                  <tbody >
//                      {
//                          //looping through all keys
//                          Object.keys(contactObjects).map(id=>{
//                              return<tr key={id}>
//                                  <td>{
//                                      contactObjects[id].fullName}</td>
//                                      <td>{
//                                      contactObjects[id].mobile}</td>
//                                      <td>{
//                                      contactObjects[id].email}</td>
//                                      <td>
//                                          <p className =  "btn text-primary" >
//                                              {/* <i className="fas fa-pencil"></i> */}
//                                               <create/>
//                                          </p>
//                                          <p className="btn text-danger">
//                                              <i className="fas fa-trash-alt"></i>
//                                          </p>
//                                      </td>
//                              </tr>
//                          })
//                      }
//                  </tbody>
//                      </table>
//             </div>
//  </div>
//   </div>
//   </div>
//   </React.Fragment> 
//   );
// }
// export default Contacts;
"use strict";