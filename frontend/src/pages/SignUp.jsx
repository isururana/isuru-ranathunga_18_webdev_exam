import React, {useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const SignUp = () => {

  const [loading, setLoading] = useState('');


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Sign up</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>First Name: </label>
          <input 
          type="text"
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Last Name: </label>
          <input 
          type="text"
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email: </label>
          <input 
          type="email"
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Username: </label>
          <input 
          type="text"
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Password:</label>
          <input 
          type="password"
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-green-300 m-8'>Sign up</button>
      </div>
    </div>
  )
}

export default SignUp