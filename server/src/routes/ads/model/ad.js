const mongoose = require('mongoose');

const adSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
    },
    birdTitle: {
      type: String,
    },
    breedName: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    contactNumber: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    locationDetails: {
      type: String,
    },
    city: {
      type: String,
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

module.exports = Ad;
