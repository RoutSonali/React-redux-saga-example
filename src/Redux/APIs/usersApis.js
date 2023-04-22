import axios from "axios";

export const loadUsersApi = async () => await axios.get('http://localhost:8000/users')

export const createUserApi = async (user) => await axios.post('http://localhost:8000/users', user)

export const updateUserApi = async (user) => await axios.patch(`http://localhost:8000/users/${user.id}`, user)

export const deleteUserApi = async (id) => await axios.delete(`http://localhost:8000/users/${id}`)