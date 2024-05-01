const mongoose = require("mongoose")

productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a product name"]
        },
        quantity: {
            type: Number,
            required: true, 
            default: 0
        },
        price: {
            type: Number, 
            required: true,
            default: 0
        },
        
        
    },
    {
        timestamps: true,
    },
    
    
)



module.exports = mongoose.model('Product', productSchema);
