

import React, {useState,useEffect}  from "react";
import ContactRegister from  './ContactRegister'
import firebaseDB from '../firebase'
 
 
    
 
const Contacts = () => {
   

    var [contactObjects,setContactObjects]= useState({})
var [cuurentId,setCurrentId]=useState('')
    useEffect(() => {
        firebaseDB.database().ref('contacts').on(
            'value',snapshot =>{
                if(snapshot.val()!=null)
                setContactObjects({
                    ...snapshot.val()
                })
            }
        )
        
        
    }, [])//a similar to componet didamount
    const addorEdit =obj=>{
        if(cuurentId === '')
        firebaseDB.database().ref('contacts').push(
            obj,
            err =>
            {
                if(err)
                console.log(err)
                else
                setCurrentId('')
            }
        )
        else
        firebaseDB.database().ref(`contacts/${cuurentId}`).set(
            obj,
            err =>
            {
                if(err)
                console.log(err)
                else
                setCurrentId('')
            }
        )
    }
    const onDelete = key =>{
        if(window.confirm('Are you sure to delete this record?')){
            firebaseDB.database().ref(`contacts/${key}`).remove(
                
                err =>
                {
                    if(err)
                    console.log(err)
                    else
                    setCurrentId('')
                }
            
            )
        }
    }
    return (
       < React.Fragment>
        <div className="row">
            < div className="col-md-8 offset-md-1">
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Contacts</h1>
      </div>
  </div>
  <div className="row">
            < div className="col-md-5  ">
           < ContactRegister {...({addorEdit,cuurentId,contactObjects})}/>
            </div>
            <div className="col-md-7">
                 <table className="table table-borderless table-strpped"> 
                 <thead className="thead-light">
                     <tr >
                         <th >
                             Full Name
                         </th>
                         <th >
                             Mobile
                         </th>
                         <th >
Email
                         </th>
                         <th >
                             Actions
                         </th>
                     </tr>
                 </thead>
                 <tbody >
                     {
                         //looping through all keys
                         Object.keys(contactObjects).map(id=>{
                             return<tr key={id}>
                                 <td>{
                                     contactObjects[id].fullName}</td>
                                     <td>{
                                     contactObjects[id].mobile}</td>
                                     <td>{
                                     contactObjects[id].email}</td>
                                     <td>
                                         <a className =  "btn text-primary" onClick ={()=> {setCurrentId(id)}} >
                                             <i className="fas fa-pencil-alt"></i>
                                         </a>
                                         <a className="btn text-danger" onClick ={()=> { onDelete(id)}}>
                                             <i className="fas fa-trash-alt"></i>
                                         </a>
                                     </td>
                             </tr>
                         })
                     }
                 </tbody>
                     
                     </table>
            </div>
 </div>
  </div>
  </div>
  </React.Fragment> 
  );
}
 
export default Contacts;