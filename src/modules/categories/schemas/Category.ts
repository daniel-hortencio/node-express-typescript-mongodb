import mongoose from 'mongoose'

export interface ICategory {
    _id: string,
    name: string,
    description: string,
    created_at: Date
}

const CategorySchema = new mongoose.Schema<Omit<ICategory, "_id">>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Category", CategorySchema)