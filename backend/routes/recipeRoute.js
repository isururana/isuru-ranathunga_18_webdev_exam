import express from "express";
import { Recipe } from "../models/recipeModel.js";

const router=express.Router();

//Route to submit new recipe
router.post('/', async (request,response) => {
    try {
        if(
            !request.body.ingredients ||
            !request.body.instructions ||
            !request.body.cookingTime
        ){
            return response.status(400).send({
                message: 'Send all required fields: ingredients, instructions, cookingTime',
            });
        }
        const newRecipe = {
            ingredients: request.body.ingredients,
            instructions: request.body.instructions,
            cookingTime: request.body.cookingTime,
        }

        const recipe = await Recipe.create(newRecipe)

        return response.status(201).send(recipe)

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}); 

//Route to get all recipes from database 
router.get('/', async (request,response) => {
    try{
        const recipes = await Recipe.find({});

        return response.status(200).json({
            count: recipes.length,
            data: recipes
        });
    } catch (error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//route to get one recipe from database by id
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const recipe = await Recipe.findById(id);
        return response.status(200).json(recipe); 
    } catch (error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to update a recipe
router.put('/:id', async (request,response) => {
    try {
        if(
            !request.body.ingredients ||
            !request.body.instructions ||
            !request.body.cookingTime
        ){
            return response.status(400).send({
                message: 'Send all required fields: ingredients, instructions, cookingTime',
            });
        }
        const {id} = request.params;

        const result = await Recipe.findByIdAndUpdate(id, request.body)

        if (!result)
        {
            return response.status(404).json({message:'Recipe not found'});
        }

        return response.status(200).json({message: 'Recipe updated successfully'})

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}); 

//Route to delete a recipe
router.delete('/:id', async (request,response) => {
    try {
        const {id} = request.params;

        const result = await Recipe.findByIdAndDelete(id, request.body)

        if (!result)
        {
            return response.status(404).json({message:'Recipe not found'});
        }

        return response.status(200).json({message: 'Recipe updated successfully'})

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;