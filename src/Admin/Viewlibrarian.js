import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "./Sidebar";

function Viewlibrarian() {
  const [librarians, setLibrarian] = useState([]);

  useEffect(() => {
      getLibrarian();
  }, []);

  const getLibrarian = async () => {
      try{
          const response = await axios.get('https://librarymanagement-backend.onrender.com/librarian/get');
          setLibrarian(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }
return (
<>  
<div class="create"> 
    <div class="image">
       <img style={{margin:"25px 480px 10px 510px"}} src="https://i.pinimg.com/originals/10/87/da/1087dab7e789ced92e9bea078de3546b.jpg" alt="" width="300" height="70"></img>
       <h2>Welcome to Library Management System</h2>
    </div>

   <div class="row">
     <Sidebar/>
      <div class="col-8">
      <h3>List of Librarian</h3>
       <table class="table table-bordered" style={{border: "2px solid black", margin:"25px"}}>
        <thead style={{textAlign: "center"}}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">Contact no.</th>
          </tr>
        </thead>
        <tbody>
            {librarians.length && librarians.map((librarian, index) => (
                        <tr key={index}>
                            <td>{librarian.name}</td>
                            <td>{librarian.email}</td>
                            <td>{librarian.password}</td>
                            <td>{librarian.city}</td>
                            <td>{librarian.contact}</td>
                        </tr>
                    ))}
                </tbody>
      </table>
    </div>
 </div>

</div> 
</>
);
}

export default Viewlibrarian;