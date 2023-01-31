import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mainlogin from './Login/Mainlogin';
import Adminlogin from './Login/Adminlogin';
import Librarianlogin from './Login/Librarianlogin';
import Addlibrarian from './Admin/Addlibrarian';
import Viewlibrarian from './Admin/Viewlibrarian';
import Deletelibrarian from './Admin/Deletelibrarian';
import Addbook from './Librarian/Addbook';
import Viewbook from './Librarian/Viewbook';
import Editbook from './Librarian/Editbook';
import Editbookform from './Librarian/Editbookform';
import Deletebook from './Librarian/Deletebook';
import './App.css';

function App(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Mainlogin/>} />
                        <Route path="/librarian" element={<Librarianlogin/>} />
                        <Route path="/admin" element={<Adminlogin/>} />
                        <Route path="/addlibrarian" element={<Addlibrarian/>} />
                        <Route path="/viewlibrarian" element={<Viewlibrarian/>} />
                        <Route path="/deletelibrarian" element={<Deletelibrarian/>} />
                        <Route path="/addbook" element={<Addbook/>} />
                        <Route path="/viewbook" element={<Viewbook/>} />
                        <Route path="/editbook" element={<Editbook/>} />
                        <Route path="/editbook1" element={<Editbookform/>} />
                        <Route path="/deletebook" element={<Deletebook/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;