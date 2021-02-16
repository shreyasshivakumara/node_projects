const express = require('express');
const router = express.Router();
const Posts = require('../models/Post');
const Subscriber = require('../subscriber');

// Get information
/*
router.get('/',(req, res) =>{
    res.end("Hey!Welcome!!");
});
*/

// Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Post Information
/*
router.post('/', async (req, res) =>{
    const post_1 = new Posts({
        title: req.body.title
    })
    try {
        const savedPost = await post_1.save()
        res.status(201).json(savedPost)
    } catch(err){
        res.status(400).json({message: err.message})
    }
});

*/

///*
router.post('/',(req,res) => {
    console.log(req.body); 
})
//*/

router.get('/specific',(req,res) =>{
    res.write("We are at a specific post!");
    res.end();
});



// Creating one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
module.exports = router; 