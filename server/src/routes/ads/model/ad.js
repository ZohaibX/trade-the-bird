const mongoose = require('mongoose');

const adSchema = new mongoose.Schema(
  {
    title: {
      type: String, 
      required: true
    }, 
    birdTitle: {
      type: String,
      required: true
    },
    breedName: {
      type: String,
      required: true
    },
    description: {
      type: String, 
      required: true
    }, 
    price: {
      type: Number, 
      required: true
    }, 
    contactNumber: {
      type: String, 
      required: true
    },
    images: [
      {type: String}
    ], 
    locationDetails: {
      type: String ,
      required: true
    },
    city: {
      type: String, 
      required: true
    }, 
  },
  // changing the returns
  {
    toJSON: {
      transform(fullDocument, returns) {
        returns.id = returns._id; // normally , all dbs have id property instead of _id , so we will also use id in mongoose
        delete returns._id;

        delete returns.__v; // we don't want to show mongoose's this property bcoz other dbs don't have this
      },
    },
  }
);

//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
adSchema.statics.build = (attrs) => {
  return new Ad(attrs);
};

const Ad = mongoose.model('Ad', adSchema);

module.exports.Ad  = Ad