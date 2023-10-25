import mongoose from "mongoose";

const empleadosSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    sexo : {
        type: String,
        required: true
    },
    area : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    rol : {
        type:String,
        require:true 
    }
    },{
        timestamps: true
    })

    export default mongoose.model('empleados', empleadosSchema);