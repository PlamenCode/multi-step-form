import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails';


export default function UserForm() {
    const [state, setState] = useState(
        {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            ocupation: '',
            city: '',
            bio: ''
        }
    );
    const { step, firstName, lastName, email, ocupation, city, bio } = state;
    const values = { step, firstName, lastName, email, ocupation, city, bio };

    function nextStep(){
        const { step } = state;
        setState({
            ...state,
            step: step + 1
        })
    };

    function prevtStep(){
        const { step } = state;
        setState({
            ...state,
            step: step - 1
        })
    };

    function handleChange(input, e){
        setState({
            ...state,
            [input]: e.target.value
        });
    };

    switch(step){
        case 1: 
            return (
                <FormUserDetails
                    nextStep={nextStep} 
                    handleChange={handleChange} 
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