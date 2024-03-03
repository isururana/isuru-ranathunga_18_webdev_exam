import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

const ShowRecipe = () => {

  const[recipe, setRecipe] = useState([]);
  const[loading, setLoading] = useState(false);
  const{id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch ((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Recipe</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>ID</span>
            <span>{recipe._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Ingredients</span>
            <span>{recipe.ingredients}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Instructions</span>
            <span>{recipe.instructions}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Cooking Time</span>
            <span>{recipe.cookingTime}</span>
          </div>
        </div>
    </div>
  )
}

export default ShowRecipe