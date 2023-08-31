const express = require('express')
const router = express.Router()


router.get("/", async (req, res) => {
    //get all user
})

router.get("/:id", async (req, res) => {
    let userId = req.params.id
    //get one user
})

router.put("/", async (req, res) => {
    
})

router.post("/", async (req, res) => {
    
})

router.post("/:userId/friends/:friendId", async (req, res) => {
    // add friend to :userId's friends list
})


router.delete("/", async (req, res) => {
    
})


module.exports = router