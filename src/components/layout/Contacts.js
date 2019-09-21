import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../Context'

export default class Contacts extends Component {
    
    render() {
       
        return(
            <Consumer>
                {value=>{
                    const{phoneBook}= value
                    return  <div>
                    <h1 className='text-danger'>Contact List</h1>
                    {phoneBook.map(contact=>(
                      <Contact key={contact.id} contact={contact}/>
                    ))}
                </div>
                }}
            </Consumer>
           
        )
    }
}
