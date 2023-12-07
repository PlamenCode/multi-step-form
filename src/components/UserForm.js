import React, { Component } from 'react'
import FormUserDetails from './FormPersonalDetails';

export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        ocupation: '',
        city: '',
        bio: ''
    };

    //Proceed to next step method
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    };

    //Go back to previous step mehod
    prevtStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    };

    //Handle fields change method
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

  render() {
    const { step, firstName, lastName, email, ocupation, city, bio } = this.state;
    const values = { step, firstName, lastName, email, ocupation, city, bio };
    
    switch(step){
        case 1: 
            return (
                <FormUserDetails 
                    nextStep={this.nextStep} 
                    handleChange={this.handleChange} 
                    values={values}
            />)
        case 2: 
            return (
                <h1>FormPersonalDetails</h1>
            )
        case 3: 
            return (
                <h1>Confirm</h1>
            )
        case 4: 
            return (
                <h1>Success</h1>
            )
        default:
            return(
                <h1>Error</h1>
            )
    }
  }
}
