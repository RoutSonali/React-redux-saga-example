import React, { useEffect, useState } from "react";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { updateUserStart } from "../../Redux/Actions/userActions";

const intialState = {
    name: '',
    email: '',
    adderss: ''
}

const EditUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formValue, setFormValue] = useState(intialState);
    var { name , email , address} = formValue;
    var { id } = useParams();
    const [submit, setSubmit] = useState();

    const user = useSelector((state) => state?.user?.user)
    console.log('USER~~~~>>', user)

    //get single value
    useEffect(() => {
        if(id) {
           const singleUser = user ? user.find((item) => item.id === Number(id)) : null;
           setFormValue({ ...singleUser})
        }
    }, [id])

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id && name  && email && address ){
            dispatch(updateUserStart(formValue))
            setSubmit(true)
        }
    }

    return (
        <div style={{ width:'50%', marginLeft:'20%'}}>
            <h1>Edit User</h1>
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

        <MDBBtn style={{marginTop:'5%'}} onClick={handleSubmit}>Update</MDBBtn>{" "}
        <MDBBtn color="info" onClick={() => history.push('/')}>Back</MDBBtn>
        </div>
    );
}

export default EditUser;