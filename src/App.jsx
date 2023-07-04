import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;























// imports before starting the code below hook effect and all

// import Todo from './components/Todo.jsx';
// import MyToDoList from './components/MyToDoList.jsx'
// import Modal from './components/Modal.jsx'
// import React, {useState, useEffect} from 'react';
//import Counter from './components/Counter.jsx';


//return <Counter> </Counter>

//   const [showModal, setShowModal] = useState(false)

//   function onTodoDelete(){
//     setShowModal(true)
//   }

//   function cancelModal(){
//     setShowModal(false)
//   }

//   function confirmodal(){
//     setShowModal(false)
//   }

//   let isModalOpen = false;

//   useEffect(()=>{
//     console.log('on mount')
//   },[])

//   return (
//     <div>
//       <MyToDoList /> 
//         <div>
//           <input type="text" onChange={(event) =>{
//           console.log(event.target.value)
//           }} />
//           <button onClick={() =>setShowModal(true)}>Add To Do</button>
//         </div>
//       <div className="todo__wrapper">
//       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" ></Todo>
//       <Todo onTodoDelete={onTodoDelete} title="Finish The Interview Section"></Todo>
//       <Todo onTodoDelete={onTodoDelete} title="Lan a $100K Job"></Todo>
//       </div>
//        {showModal ? <Modal cancelModal={cancelModal} confirmodal={confirmodal} title="Are you sure you want to delete?"></Modal> : null } 

//     </div>
//   );

        //    <Route path="/about" element={<About></About>}></Route>
        //   <Route path="/contact" element={<Contact></Contact>}></Route> 



        //  <nav>
        //   <Link to="/">Home</Link>
        //   <Link to="/about">About</Link>
        //   <Link to="/contact">Contact</Link>
        // </nav> 









