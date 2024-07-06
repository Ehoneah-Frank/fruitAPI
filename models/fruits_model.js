import { toJSON } from "@reis/mongoose-to-json";

import { Schema, model } from "mongoose";



const fruitSchema = new Schema({
    fruitName:{
        type: String
    },

    fruitState:{
        type: String,
        enum: ["good", "bad"]
    },

    fruitPrice:{
        type: Number
    },

    fruitSize:{
        type: String,
        enum: ["small", "large"]
    },

});

fruitSchema.plugin(toJSON);
export const fruitModel = model("Fruit", fruitSchema);

// export default fruitModel;