import { Route } from 'react-router-dom';
import './App.css';
import UsersList from './components/pages/UserList';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={UsersList}/>
      <Route path='/addUser' component={AddUser} />
      <Route path='/editUser/:id' component={EditUser}/>
    </div>
  );
}

export default App;
