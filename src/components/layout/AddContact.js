import React, { Component } from 'react'
import { Consumer } from '../../Context'

export default class AddContact extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
        id :'',
        name : '',
        number : '',
        email:''
      }
  }
       
  changeState=(e)=>{
    e.preventDefault()
    this.setState({[e.target.id]:e.target.value})
}

    submitContact=(dispatch,e)=>{
        e.preventDefault();
        const {id,name,number,email}= this.state
        const newContact ={
            id,
            name ,
            number,
            email
        }
        dispatch({type:"ADD_CONTACT", payload :newContact})   
        
        //clear the state
        this.setState({
            name :'',
             number:'', 
             email:''
        })  
        //redirect to homepage
        this.props.history.push('/');
    }
 
  
    
    render() {
        const {name,number,email} = this.state
        return(
        <Consumer>
            {value=>{
                const {dispatch}= value
                return (
                    <div className="card">
                        <div className="card-header">
                            Add Contact
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitContact.bind(this, dispatch)}>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <input type="text" className="form-control" id="name"
                                         placeholder="Enter Name" value={name} onChange={this.changeState}></input>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <input type="text" className="form-control" id="number"
                                         placeholder="Enter Number" value={number} onChange={this.changeState}></input>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <input type="email" className="form-control" id="email"
                                         placeholder="Enter Email" value={email}  onChange={this.changeState}></input>
                                    </div>
                                    <input className="btn btn-primary" type="submit"></input>
                                </div>
                            </form>
                        </div>  
                    </div>
                )

            }}
        </Consumer>
        )
        
    }
}
