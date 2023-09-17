const Thought = require('../model/Thought')
const User = require('../model/User')

const db = require('../connection')





const userData = [
    { 
        username: "Ralph Gorp",
        email: "gorp@gorpy.com"
    },
    { 
        username: "Bill Billson",
        email: "bill@billsonplumbing.com"
    },
    { 
        username: "Kal Jiminy",
        email: "bat@cricket.com"
    }
]



const thoughtData = [
    {
        username: "Ralph Gorp",
        thoughtText : "Politics is hard!"
    },
    {
        username: "Ralph Gorp",
        thoughtText : "I'm grilling today!"
    },
    {
        username: "Bill Billson",
        thoughtText : "I wish I could shift to Hogwarts!"
    },
    {
        username: "Bill Billson",
        thoughtText : "My blood is basically gravy!"
    },
    {
        username: "Kal Jiminy",
        thoughtText : "Queen Elizabeth!"
    },
    {
        username: "Kal Jiminy",
        thoughtText : "Doctor Who?!"
    }
]





 
db.once('connected', () => {
    console.log('Database Connected');

    db.dropCollection('users');
    db.dropCollection('thoughts');
    db.dropCollection('reactions');

    userData.forEach(user => {
        User.create(user)
    })

    thoughtData.forEach(thought => {
        Thought.create(thought)
    })

    console.log('Database Seeded');
    process.exit(0);
})



