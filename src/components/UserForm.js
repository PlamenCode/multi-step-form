import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


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

    function prevStep(){
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
                <FormPersonalDetails 
                    nextStep={nextStep} 
                    handleChange={handleChange} 
                    values={values}
                    prevStep={prevStep}
                />
            )
        case 3: 
            return (
                <Confirm 
                    nextStep={nextStep} 
                    values={values}
                    prevStep={prevStep}
                />
            )
        case 4: 
            return (
                <Success />
            )
        default:
            return(
                <h1>Error</h1>
            )
    }
}