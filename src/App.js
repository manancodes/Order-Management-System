import logo from './logo.svg';
import './App.css';

import Sidebar from './Components/SideBar/Sidebar';
import Sidebar_Container from './Components/Sidebar_Container/Sidebar_Container';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemsNeededCard from './Components/ItemsNeededCard/ItemsNeededCard';
import OrderCard from './Components/OrderCard/OrderCard';
import SummaryNeededCard from './Components/SummaryNeededCard/SummaryNeededCard';

function App() {
  return (
    <BrowserRouter>
   <div>
     <Sidebar_Container />
    
   </div>
   </BrowserRouter>
  );
}

export default App;
