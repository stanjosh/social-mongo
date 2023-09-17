const router = require('express').Router();
const User = require('../model/userSchema');

router.get("/", async (req, res) => {
    //get all user
    User.find({})
    .then((data) => {
        console.log(data);
        return res.status(200).send(data)
    })
    .catch(err => res.status(400).send(err))
})

router.get("/:id", async (req, res) => {
    User.findById(req.params.id)
    .then((data) => {
        return res.status(200).send(data)
    })
    .catch(err => res.status(400).send(err))
})

router.put("/", async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.status(200).send('updated'))
    .catch(err => res.status(400).send(err))
})

router.post("/", async (req, res) => {
    User.create(req.body)
    .then(() => res.status(200).send('saved'))
    .catch(err => res.status(400).send(err))
})

router.post("/:userId/friends/:friendId", async (req, res) => {
    // add friend to :userId's friends list
    User.findByIdAndUpdate(req.params.userId, {
        $push: { friends: req.params.friendId }}, { new: true })
    .then(() => res.status(200).send('friend added'))
    .catch(err => res.status(400).send(err))

})


router.delete("/", async (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).send('deleted'))
    .catch(err => res.status(400).send(err))
})


router.delete("/:userId/friends/:friendId", async (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $pull: { friends: req.params.friendId }}, { new: true })
    .then(() => res.status(200).send('friend deleted'))
    .catch(err => res.status(400).send(err))
})


module.exports = router