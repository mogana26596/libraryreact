import React, {useState, useEffect} from "react";
import '../App.css';
import { Formik} from 'formik';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Editbookform() {
    const params = useParams();
    const navigate = useNavigate();
    const adminID = params.adminID;

    const [bookDetails, setbookDetails] = useState({
        bookname: '',
        isbn:'',
        author: '',
        publisher: '',
        quantity: ''
    });

    useEffect(() => {
        axios.get(`https://librarymanagement-backend.onrender.com/admin/get/${adminID}`).then((response) => {
            setbookDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [adminID]);

    const handleInput = (value) => {
        return setbookDetails(book => {
            return {...book, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updating employee details...');
        try{
            const response = await axios.put(`https://librarymanagement-backend.onrender.com/admin/update/${adminID}`, bookDetails);
            if(response){
                setbookDetails({
                  bookname: '',
                  isbn:'',
                  author: '',
                  publisher: '',
                  quantity: ''
                });
                navigate('/editbook');
            }
        }catch(error){
            console.log('Error: ', error)
        }
    }
return (
<>  
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
          <h3>Add Books</h3>
          
          <div class="row">
          <label for="inputtext" class="col-4 col-form-label"><b>Book Name</b></label>
          <div class="col-8">
          <input type="text" class="form-control" placeholder=" Enter Book Name" value={bookDetails.bookname} onChange={e => handleInput({bookname: e.target.value})}/>
          </div>
          </div><br/>
      
          <div class="row">    
          <label for="inputtext" class="col-4 col-form-label"><b>ISBN No.</b></label>
          <div class="col-8">
          <input type="text" class="form-control" placeholder=" Enter ISBN" value={bookDetails.isbn} onChange={e => handleInput({isbn: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">    
          <label for="inputtext" class="col-4 col-form-label"><b>Author Name</b></label>
          <div class="col-8">
          <input type="text" class="form-control" placeholder=" Enter Author Name" value={bookDetails.author} onChange={e => handleInput({author: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <label for="inputtext" class="col-4 col-form-label"><b>Publisher Name</b></label>
          <div class="col-8">
          <input type="text" class="form-control" placeholder=" Enter Publisher Name" value={bookDetails.publisher} onChange={e => handleInput({publisher: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <label for="inputtext" class="col-4 col-form-label"><b>Quantity</b></label>
          <div class="col-8">
          <input type="text" class="form-control" placeholder=" Enter Quantity" value={bookDetails.quantity} onChange={e => handleInput({quantity: e.target.value})}/>
          </div>
          </div><br/>

          <div class="row">
          <div class="col-12">
          <button style={{margin:"15px  90px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Update Book</b></button>
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
</>
);
}

export default Editbookform;