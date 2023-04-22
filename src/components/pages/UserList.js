import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../../Redux/Actions/userActions";

const UsersList = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    
    useEffect(() => {
        dispatch(loadUsersStart())
    }, [])

    const tableData = useSelector((state) => state?.user?.user);
    console.log('TABLE-DATA~~~~~~~~~>>', tableData)
    const [data , setData] = useState(tableData);

    useEffect(() => {
        setData(tableData)
    }, [tableData])
    
    const handleDelete = (id) => {
        dispatch(deleteUserStart(id))
    }

    return (
        <div>
            <h1>Users List</h1>
            <MDBBtn color="info" style={{marginLeft:'50%'}} onClick={() => history.push('/addUser')}>New + </MDBBtn>
            <MDBTable style={{ width: '80%', marginTop:'5%', marginLeft:'15%'}}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Action</th>
                    </tr>
                </MDBTableHead>
                {data.map((item) => {
                    return (
                <MDBTableBody>
                    <tr>
                        <th scope='row'>{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>
                            <MDBBtn color='primary' tag='a' floating onClick={() => history.push(`/editUser/${item.id}`)}>
                                <MDBIcon fas icon='magic' />
                            </MDBBtn>{" "}
                            <MDBBtn color='danger' tag='a' floating onClick={() => handleDelete(item.id)}>
                                <MDBIcon fas icon='trash' />
                            </MDBBtn>
                        </td>
                    </tr>
                   
                    
                </MDBTableBody>
                    )
                })}
            </MDBTable>
        </div>
    )
}

export default UsersList;