const router = require('express').Router();
const Thought = require('../model/thoughtSchema')

router.get("/", async (req, res) => {
    Thought.find({})
    .then((data) => {
        console.log(data);
        return res.status(200).send(data)
    })
    .catch(err => res.status(400).send(err))
})

router.get("/:id", async (req, res) => {
    Thought.findById(req.params.id)
    .then((data) => {
        return res.status(200).send(data)
    })
    .catch(err => res.status(400).send(err))
})

router.put("/", async (req, res) => {
    let data = req.body
    Thought.findByIdAndUpdate(req.params.id, data, { new: true })
    .then(() => res.status(200).send('updated'))
    .catch(err => res.status(400).send(err))
})

router.post("/", async (req, res) => {
    let data = new Thought(req.body)
    data.save()
    .then(() => res.status(200).send('saved'))
    .catch(err => res.status(400).send(err))
})

router.delete("/", async (req, res) => {
    Thought.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send('deleted'))
    .catch(err => res.status(400).send(err))
})

router.post('/:thoughtId/reactions', async (req, res) => {
    // create reaction to be stored in a thought
    Thought.findByIdAndUpdate(req.params.thoughtId, { 
        $push: { reactions: req.body }}, { new: true })
    .then(() => res.status(200).send('reaction added'))
    .catch(err => res.status(400).send(err))
})


router.delete('/:thoughtId/reactions', async (req, res) => {
    // delete reaction from a thought
    Thought.findByIdAndUpdate(req.params.thoughtId, {
        $pull: { reactions: { reactionId: req.params.reactionId }}}, { new: true })
    .then(() => res.status(200).send('reaction deleted'))
    .catch(err => res.status(400).send(err))
})

module.exports = router