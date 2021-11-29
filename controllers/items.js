import express from 'express';
import  mongoose  from 'mongoose';
import ItemMessage from '../models/itemMessage.js'

const router = express.Router();

export const getItems = async (req, res) => {
    try {
        const itemMessages = await ItemMessage.find();

        res.status(200).json(itemMessages);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

  export const getItem = async (req, res) => { 
    const { id } = req.params;

    try {
        const item = await ItemMessage.findById(id);
        
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createItem = async (req, res) => {
    const { title } = req.body;

    const newItemMessage = new ItemMessage({ title })

    try {
        await newItemMessage.save();

        res.status(201).json(newItemMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    const updatedItem = { title, _id: id };

    await ItemMessage.findByIdAndUpdate(id, updatedItem, { new: true });

    res.json(updatedPost);
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    await ItemMessage.findByIdAndRemove(id);

    res.json({ message: "Item deleted successfully." });
}


export default router;




