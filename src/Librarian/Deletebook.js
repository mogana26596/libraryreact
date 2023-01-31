import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Deletebook() {
  const [books, setbook] = useState([]);

  useEffect(() => {
      getbook();
  }, []);

  const getbook = async () => {
      try{
          const response = await axios.get('https://librarymanagement-backend.onrender.com/admin/get');
          setbook(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }
  const handleDelete = async (bookID) => {
    try{
        const response = await axios.delete(`https://librarymanagement-backend.onrender.com/admin/delete/${bookID}`);
        if(response){
          getbook();
        }
    }catch(error){
        console.log(error);
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
      <h3>List of Books</h3>
       <table class="table table-bordered" style={{border: "2px solid black", margin:"25px"}}>
        <thead style={{textAlign: "center"}}>
        <tr> 
            <th scope="col">Book Name</th>
            <th scope="col">ISBN No.</th>
            <th scope="col">Author Name</th>
            <th scope="col">Publisher Name</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
        {books.length && books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.bookname}</td>
                            <td>{book.isbn}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.quantity}</td>
                            <td>
                              <IconButton onClick={() => handleDelete(book._id)} color="warning">
                              <DeleteIcon />
                              </IconButton>
                            </td>
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

export default Deletebook;
