import React, { Component } from 'react'
import { Consumer } from '../../Context'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toggleContact : false
        }
    }
    toggleList=()=>{
        this.setState({toggleContact: !this.state.toggleContact})     
    }

    deleteContact=(id,dispatch)=>{
        dispatch({type:"DELETE_CONTACT", payload:id})

        console.log("I am feeling good");
    }

    render() {
        return(
        <Consumer>
            {value=>{
                const {dispatch}= value
                const {toggleContact}= this.state
                const {id,name,number,email}= this.props.contact
                 return (
                     <div className="card">
                         <div className="card-body">
                          Name :{name}
                          <button type="button" onClick={this.toggleList} style={{color:"green", marginLeft: "230px"}}>+</button>
                          <button type="button" onClick={this.deleteContact.bind(this,id,dispatch)}  style={{color:"green", marginLeft: "800px"}}>X</button>
                         </div>
                         {toggleContact && <ul className="list-group list-group-flush">
                             <li className="list-group-item">Number:{number}</li>
                             <li className="list-group-item">Email{email}:</li>
                         </ul>
                     }                    
                     </div>
                 )
            }}
        </Consumer>
        )
        
    }
}
