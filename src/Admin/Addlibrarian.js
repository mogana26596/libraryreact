import React, {useState} from "react";
import '../App.css';
import { Formik} from 'formik';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addlibrarian() {
      const navigate = useNavigate();
      const [librarianDetails, setLibrarianDetails] = useState({
          name: '',
          email: '',
          password: '',
          city: '',
          contact: ''
      });
  
      const handleInput = (value) => {
          return setLibrarianDetails(librarian => {
              return {...librarian, ...value}
          });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          console.log('Submitting Librarian details...');
          try{
              const response = await axios.post('https://librarymanagement-backend.onrender.com/librarian/create', librarianDetails);
              if(response){
                  setLibrarianDetails({
                     name: '',
                     email: '',
                     password: '',
                     city: '',
                     contact: ''
                  });
                  navigate('/viewlibrarian');
              }
          }catch(error){
              console.log('Error: ', error)
          }
      }
   
return (
<span>  
<div class="create"> 
    <div class="image">
       <img style={{margin:"25px 480px 10px 800px"}} src="https://i.pinimg.com/originals/10/87/da/1087dab7e789ced92e9bea078de3546b.jpg" alt="" width="300" height="70"></img>
       <h2>Welcome to Library Management System</h2>
    </div>

   <div class="row">
     <Sidebar/>

    <div class="col-5">
     <Formik>
       <form style={{padding:"30px 40px"}}>
          <h3>Add Librarian</h3>
          
          <div class="row">
          <label for="inputtext" class="col-3 col-form-label"><b>Name</b></label>
          <div class="col-9">
          <input type="text" class="form-control" placeholder=" Enter Name" value={librarianDetails.name} onChange={e => handleInput({name: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">    
          <label for="inputemail" class="col-3 col-form-label"><b>Email</b></label>
          <div class="col-9">
          <input type="email" class="form-control" placeholder=" Enter Email" value={librarianDetails.email} onChange={e => handleInput({email: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">    
          <label for="inputPassword" class="col-3 col-form-label"><b>Password</b></label>
          <div class="col-9">
          <input type="password" class="form-control" placeholder=" Enter Password" value={librarianDetails.password} onChange={e => handleInput({password: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <label for="inputtext" class="col-3 col-form-label"><b>City</b></label>
          <div class="col-9">
          <input type="text" class="form-control" placeholder=" Enter City" value={librarianDetails.city} onChange={e => handleInput({city: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <label for="inputtext" class="col-3 col-form-label"><b>Contact no.</b></label>
          <div class="col-9">
          <input type="text" class="form-control" placeholder=" Enter Contact no." value={librarianDetails.contact} onChange={e => handleInput({contact: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <div class="col-12">
          <button style={{margin:"15px  90px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add Librarian</b></button>
          </div>
          </div><br/>
          
      </form> 
      </Formik> 
      </div>

      <div class="col-4">
      <img style={{margin:"90px 30px"}} src="https://pbs.twimg.com/profile_images/865632468333875200/AVHjyMZG_400x400.jpg" alt="" width="330" height="330"></img>
      </div>
   </div>
</div> 
</span>
);
}

export default Addlibrarian;