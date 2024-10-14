const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema(
        {
            name: {
                type: String,
                require: true,
            },
            age: {
                type: Number,
                require: true,
            },
            weigth: {
                type: Number,
                require: true,
            },
            color: {
                type: String,
                require: true,
            },
            images: {
                type: Array,
                require: true,
            },
            avaiable: {
                type: Boolean,
            },
            user: Object,
            adopter: Object,
        },
        { timestamps: true },
    ),
)

module.exports = Pet   