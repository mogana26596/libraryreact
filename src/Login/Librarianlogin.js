import React, {useState }from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Librarianlogin() {
  const navigate = useNavigate();
  const[formData, setFormData] =useState({
      email: "",
      password: ""
  }); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axios.post('https://librarymanagement-backend.onrender.com/register/librarianlogin', {...formData });
            console.log(response);console.log(formData);
            if(response.data) {
                await localStorage.setItem("token", response.data);
                navigate('/addbook');
            }
            } catch(err) {
            console.log(err);
            }
    };         
    return (
      <>
        <div class="card mb-3" style={{width: "45rem",margin:"150px auto",padding:"30px 30px 50px 10px"}}>
           <div class="row g-4">
             <div class="col-md-6">
             <img style={{margin:"30px 0px 0px 60px"}} src="https://i.pinimg.com/474x/6f/f1/52/6ff152ecb91982c89c5250639900ffd8.jpg" alt="" width="230" height="250"></img>             </div>
          
          <div class="col-md-6">
          <h2>Librarian Login</h2>
          <form onClick={handleSubmit}>
          <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"><i class="fa fa-envelope" aria-hidden="true"></i></span>
              <input type="email" class="form-control" id="floatingInput" placeholder="Email" 
              value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/>
          </div>
      
          <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping"><i class="fa fa-lock fa-1x" aria-hidden="true"></i></span>
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
              value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
          </div>
      
          <button type="button" style={{margin:"0px 35px"}} class="btn btn-primary"><b>Login</b></button>
          
          </form>
          </div>
          </div>
        </div>
      </>
      );
}

export default Librarianlogin;


