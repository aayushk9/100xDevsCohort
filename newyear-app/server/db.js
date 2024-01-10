require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

mongoose.connect(URI);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}