import { Router } from "express";
import { Book } from "../models/bookModel.js";
const router = Router();

//Route to save the book
router.post('/', async (req, res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({
                message: 'Send all the required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }

});

//Route to get json of all the books
router.get('/', async (req, res)=>{
    try {
        const books = await Book.find({})
        res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

//Route to get json of a particular book based on id
router.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

//Route to update of a particular book based on id
router.put('/:id', async (req, res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({
                message: 'Send all the required fields: title, author, publishYear'
        })}
        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)
        if(!result){
            res.status(404).json({message: 'Book not found'})
        }
        
        return res.status(200).send({message: 'Book updated successfully'})
            
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

//Route to delete of a particular book based on id
router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id, req.body)
        if(!result){
            res.status(404).json({message: 'Book not found'})
        }
        
        return res.status(200).send({message: 'Book deleted successfully'})
            
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

export default router; 