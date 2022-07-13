const { Password } = require('../password-hashing/hashing');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    role: {
      type: String,
      default: 'User',
    },
    password: String,
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  // changing the returns
  {
    toJSON: {
      transform(fullDocument, returns) {
        returns.id = returns._id; // normally , all dbs have id property instead of _id , so we will also use id in mongoose
        delete returns._id;

        delete returns.password; // password will not be returned in any request
        delete returns.__v; // we don't want to show mongoose's this property bcoz other dbs don't have this
      },
    },
  }
);

//? password hashing middleware
userSchema.pre('save', async function (done) {
  // this pre middleware will only run on saving data
  if (this.isModified('password')) {
    // this if statement will only run when password is modified ..
    // for example, if username or email is modified/changed , then this if function will not execute
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

//? this is to apply ts type checking on the attributes -- we provide while creating -- ex at (1)
userSchema.statics.build = (attrs) => {
  return new User(attrs);
};

const User = mongoose.model('User', userSchema);

module.exports.User = User;
