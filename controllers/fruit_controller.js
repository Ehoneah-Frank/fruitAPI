import { fruitModel } from "../models/fruits_model.js";



// Function to post fruits

export const postFruits = async (req, res) => {
    try {

        console.log('reqest', req.body);
        const addFruit = await fruitModel.create(req.body);
        res.status(200).json(addFruit);
    } catch (error) {
        console.log(error);
    }
}


// Function to get all fruits
export const getFruits = async (req, res) => {
    try {
        console.log('reqest', req.body);
        const getFruits = await fruitModel.find();
        res.status(200).json(getFruits);
    } catch (error) {
        console.log(error);
    }
}


// Function to get one fruit

export const getOneFruit = async (req, res) => {
    try {
        console.log('reqest', req.body);
        const showOneFruit = await fruitModel.findById(req.params.id);
        res.status(200).json(showOneFruit);
    } catch (error) {
        console.log(error);
    }
}


// Function to pacth a fruit
export const patchFruit = async (req, res) => {
    try {
        console.log('reqest', req.body);
        const updateFruit = await fruitModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        {
            res.status(200).json(updateFruit);
        }

    } catch (error) {
        console.log(error);
    }
}


// Function to delete a fruit

export const deleteFruit = async (req, res) => {
    console.log('reqest', req.body);
    try {
        const deleteFruit = await fruitModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteFruit);
    } catch (error) {
        console.log(error);
    }
}
