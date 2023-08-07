const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true,'Name is required'],
        trim: true, // trims if there is some extra spacing at end.
        maxlength: [20, 'Name must be less than 20 char'] // we can show this custom err msg.
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    }

})

// Export mongoose.model()
module.exports = mongoose.model("User", userSchema);
