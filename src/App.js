import React from 'react';
import './App.css';
import Home from './Home';
import Cod from './Cod';
import Gta from './Gta';
import Valorant from './Valorant';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
return (
<div className="App">
<Router>
<center>
    <nav id="navbar">
<div className='navigation' >
<table border='0' cellpadding={4} cellSpacing={15} borderspacing={40} >
<tr><td colspan='30' align='center'><Link to = "/" className='home'style={{ color: 'orange' }}>Home</Link></td></tr>
<tr><td>1. <Link to = "/Gta"style={{ color: 'orange' }}>GTA </Link></td><td></td><td></td><td></td><td></td><td>2.  <Link to = "/Valorant"style={{ color: 'orange' }}>Valorant</Link></td><td></td><td></td><td></td><td></td><td>3.  <Link to = "/Cod"style={{ color: 'orange' }}>COD</Link></td></tr>
</table>
</div>
</nav>
</center>
<Routes>
<Route exact path ="/" element = {<Home/>}></Route>
<Route exact path ="/Gta" element = {<Gta/>}></Route>
<Route exact path ="/Cod" element = {<Cod/>}></Route>
<Route exact path ="/Valorant" element = {<Valorant/>}></Route>
</Routes>
</Router>
</div>
)
}
export default App;

