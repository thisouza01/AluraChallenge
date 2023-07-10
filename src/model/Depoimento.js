import mongoose from "mongoose";

const depoimentoSchema = new mongoose.Schema(
    {
        foto: { type: String },
        depoimento: {
            type: String,
            required: true
        },
        nome:{
            type: String ,
            required: true
        },
    }
);


export default mongoose.model('Depoimento', depoimentoSchema);