import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },

    email: {
        type:String,
        required: true,
        unique:true
    },

    password: {
        type:String,
        required: true
    },

    avatar: {
        type: String,
        default: "https://www.filmincolour.ca/wp-content/uploads/2020/07/default_image-2-400x500_c.jpg"
    },
    
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;