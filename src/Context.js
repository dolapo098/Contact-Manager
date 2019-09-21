import React, { Component } from 'react'

const Context = React.createContext();
const reducer= (state, action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                phoneBook:state.phoneBook.filter(contact=>(
                    contact.id !==action.payload
                ))
            };
        case 'ADD_CONTACT':
            return {
                ...state, 
                phoneBook:[action.payload, ...state.phoneBook]
            };
        default: return this.state;
    }
}

  export class Provider extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
              phoneBook:[
                  {
                      id :1,
                      name : 'Dorris',
                      number : 234,
                      email:'dorris@yahoo.com'
                  },
                  {
                    id :2,
                    name : 'Dennis',
                    number : 235,
                    email:'dennis@yahoo.com'
                  },
                  {
                    id :3,
                    name : 'Davies',
                    number : 236,
                    email:'davies@yahoo.com'
                  }
              ],
              dispatch : action=>{
                  this.setState(state=>
                    reducer(state,action))
              }            
          }
      }
      
    render() {
        const{children} = this.props
        return (
            <Context.Provider value={this.state}>
                {children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer