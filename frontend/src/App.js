//App.js 

import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Todo from './components/Todo'; 
import Apppp from './login';
import RemainderButton from './components/Remainder';


function App() { 
const headStyle = { 
	textAlign: "center", 
} 
return ( 
	<div> 
   
	<h1 style={headStyle}>Todo List</h1> 
	<BrowserRouter> 
		<Routes> 
		<Route path='/' element={<Todo/>}></Route> 
		</Routes> 
	</BrowserRouter> 
  <RemainderButton/>
  <Apppp/>
	</div> 
 
); 
} 

export default App;
