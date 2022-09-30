import mongoose from 'mongoose';


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/widgets',{
    useNewUrlParser: true
});

const widgetSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    soldout:{
        type: String
    },
    stores:{
        type: Array
    },
    inventory:{
        type: String
    },
    price:{
        type: Number
    }
  
});

const Widgets =  mongoose.model('widgets',widgetSchema);

export { Widgets }
