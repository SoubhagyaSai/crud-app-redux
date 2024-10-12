import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/userSlice';

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch =  useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))
    }

  return (
    <div className='container justify-content-center'>
      <h2>Crud app with JSON Server</h2>
      <Link to='/create' className='btn btn-success my-3'>Create</Link>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { 
                users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-primary mx-2'>Edit</Link>
                            <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delte</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Home
