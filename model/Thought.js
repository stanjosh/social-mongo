const mongoose = require('mongoose');



const thoughtSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    thoughtText : {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (value) => dateFormat(value)
    },
    Reactions: [{
        reactionId: {
            type: mongoose.Schema.ObjectId,
        },
        reactionText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdBy: { 
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (value) => dateFormat(value)
        }

    }],
})

thoughtSchema.virtual('reactionCount').get(function() {
    return this.Reactions.length();
})

module.exports  = mongoose.model('Thought', thoughtSchema)