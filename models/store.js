import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const StoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuit: { type: String, required: true },
    concepts: { type: Array, required: true },
    currentBalance: { type: Number, required: true },
    active: { type: Boolean, required: true },
    lastSale: { type: Date, required: true }
}, { timestamps: true });

StoreSchema.plugin(mongoosePaginate)

export const StoreModel = mongoose.model('Store', StoreSchema);