import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

function Sidebar() {
   const navigate = useNavigate();
return (
<>  
    <div class="col-3">
       <div class="sidebar">     
           <button type="button" style={{margin:"100px 45px 15px 45px",width:"220px"}} class="btn btn-light" onClick={()=>navigate("/addbook")}><b>Add Book</b></button>
           <button type="button" style={{margin:"15px 45px",width:"220px"}} class="btn btn-light" onClick={()=>navigate("/viewbook")}><b>View Book</b></button>
           <button type="button" style={{margin:"15px 45px",width:"220px"}} class="btn btn-light" onClick={()=>navigate("/editbook")}><b>Edit Book</b></button>
           <button type="button" style={{margin:"15px 45px",width:"220px"}} class="btn btn-light" onClick={()=>navigate("/deletebook")}><b>Delete Book</b></button>
           <button type="button" style={{margin:"15px 45px 100px 45px",width:"220px"}} class="btn btn-light" onClick={()=>navigate("/")}><b>Logout</b></button>
        </div> 
    </div>
</>
);
}

export default Sidebar;