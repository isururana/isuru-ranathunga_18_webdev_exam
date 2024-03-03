import React, {useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {useNavigate} from 'react-router-dom';

const SubmitRecipe = () => {

  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const HandleSaveRecipe = () => {
    const data = {
      ingredients,
      instructions,
      cookingTime,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/recipes', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Submit Recipe</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Ingredients</label>
          <input 
          type="text"
          value = {ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Instructions</label>
          <input 
          type="text"
          value = {instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Cooking Time</label>
          <input 
          type="text"
          value = {cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={HandleSaveRecipe}>Submit</button>
      </div>
    </div>
  )
}

export default SubmitRecipe