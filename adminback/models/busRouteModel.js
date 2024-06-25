const mongoose = require("mongoose");
const busRouteSchema = new mongoose.Schema(
  {


    
    busnumber: {
      type: String,
      required: true,
    },


    allstops: {
      type: String,
      required: true,
    },
    

    
    route: {
      type: String,
      required: true,
    },
    

    totalstops: {
        type: String,
        required: true,
      },  


  
  }
  ,
  {
    timestamps: true,
  }
);
const Stops = mongoose.model("stops", busRouteSchema);
module.exports = Stops;
