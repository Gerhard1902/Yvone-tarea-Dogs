const express=require('express');
const router= express.Router();
const Dog= require('../model/Dog');
const mongoose = require('mongoose');

//GET BACK ALL THE DOGS
router.get('/', async (req,res)=>{   //post, delete, patch-> updates
    //res.send('We are on dogs');
    try{
        const dogs= await Dog.find();
        res.json(dogs);
    }catch (err){
        res.json({message:err});
    }
});

/*router.get('/specific',(req,res)=>{   //post, delete, patch-> updates
    res.send('We are on specific');
});*/

//SUBMIT A DOG
router.post('/', (req,res)=>{
    //console.log(req.body); //-> regresa el objeto
    const dog = new Dog({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });
    dog.save().then(
        data=>{ res.json(data);
    })
    .catch(err=>{
        res.json({message:err});
    });
});

//GET BACK A SPECIFIC POST
router.get('/:dogId', async (req,res)=>{
    //console.log(req.params.dogId);
    try{
    const dog= await Dog.findById(req.params.dogId);

    res.json(dog);
    }
    catch(err){res.json({message:err})}
});

//DELETE POST
router.delete('/:dogId', async (req,res)=>{
    try{
    const removedDog= await Dog.remove({_id: req.params.dogId});

    res.json(removedDog);
    }
    catch(err){res.json({message:err})}
});

//UPDATE A POST
router.patch('/:dogId', async (req,res)=>{
    try{
    const updatedDog= await Dog.updateOne({_id: req.params.dogId},{$set: {
        name: req.body.name,
        age: req.body.age
    }});

    res.json(updatedDog);
    }
    catch(err){res.json({message:err})}
});

module.exports= router;