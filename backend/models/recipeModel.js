import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        ingredients:{
            type: String,
            required: true,
        },
        instructions:{
            type: String,
            required: true,
        },
        cookingTime:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);