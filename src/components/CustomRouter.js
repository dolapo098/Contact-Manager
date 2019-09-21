import React from 'react';
import {BrowserRouter as R , Route,Switch} from "react-router-dom" ;
import Contacts from './layout/Contacts';
import AddContact from './layout/AddContact';


 const CustomRouter=()=>{
    return (
       <R>
           <Switch>
               
               <Route path="/" exact component={Contacts}></Route>
               <Route path="/add" exact component={AddContact}></Route>
           </Switch>
       </R>
    )
}

export default CustomRouter
