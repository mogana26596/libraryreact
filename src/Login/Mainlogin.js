import '../App.css';
import {useNavigate} from 'react-router-dom';

function Mainlogin() {
  const navigate = useNavigate();
return (
<>
<div class="card mb-5" style={{width: "45rem",margin:"150px auto",padding:"65px 30px 65px 10px"}}>
   <div class="row g-4">
    <div class="col-md-6">
      <img src="http://volunteerrutherford.com/wp-content/uploads/2016/02/moocs_computer-and-books-820x410.jpg" class="img" alt="" width="380" height="250"/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
         <button type="button" class="btn btn-primary" onClick={()=>navigate("/admin")}><b>Admin Login</b></button>
         <button type="button" class="btn btn-primary" onClick={()=>navigate("/librarian")}><b>Librarian Login</b></button>
      </div>
    </div>
  </div>
</div>
</>
);
}

export default Mainlogin;
 