import React, { useState } from "react";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { createUserStart } from "../../Redux/Actions/userActions";

const intialState = {
    name: '',
    email: '',
    adderss: ''
}

const AddUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formValue, setFormValue] = useState(intialState);
    var { name , email , address} = formValue;
    const [submit, setSubmit] = useState();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name  && email && address ){
            dispatch(createUserStart(formValue))
            setSubmit(true)
        }
    }

    return (
        <div style={{ width:'50%', marginLeft:'20%'}}>
            <h1>Add User</h1>
            <MDBInput 
                label='Name' 
                id='name' 
                type='text' 
                size='lg' 
                name='name'
                value={name}
                onChange={handleChange}
                />
            <br />
            <MDBInput 
                label='Email' 
                id='email' 
                type='email' 
                name='email'
                value={email}
                onChange={handleChange}
                />
            <br />
            <MDBInput 
                label='Address' 
                id='address' 
                type='text' 
                size='sm' 
                name='address'
                value={address}
                onChange={handleChange}
                />

        <MDBBtn style={{marginTop:'5%'}} onClick={handleSubmit}>Submit</MDBBtn>{" "}
        <MDBBtn color="info" onClick={() => history.push('/')}>Back</MDBBtn>
        </div>
    );
}

export default AddUser;