import mongoose, { Schema } from 'mongoose'

export interface IProduct {
    _id: string,
    name: string,
    price: number,
    description: string,
    brand: string,
    categories: string[],
    created_at: Date
}

const ProductSchema = new Schema<Omit<IProduct, '_id'>>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    brand: {
        type: String,
        default: ""
    },
    categories: [{
        type: String
    }],
    created_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Product", ProductSchema)