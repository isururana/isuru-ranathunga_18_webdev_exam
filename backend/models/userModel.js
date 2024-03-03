import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);