const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const saltRounds = 10;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      // required: true,
      // unique: true,
      trim: true,
      // minlength: 4,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
      minlength: 5,
    },
    name: {
      type: String,
      maxlength: 50,
    },
    lastname: {
      type: String,
      maxlength: 50,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   var user = this;

//   if (user.isModified("password")) {
//     // console.log('password changed')
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//       if (err) return next(err);

//       bcrypt.hash(user.password, salt, function (err, hash) {
//         if (err) return next(err);
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

// userSchema.methods.comparePassword = function (plainPassword, cb) {
//   bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// userSchema.methods.generateToken = function (cb) {
//   var user = this;
//   console.log("user", user);
//   console.log("userSchema", userSchema);
//   var token = jwt.sign(user._id.toHexString(), "secret");
//   var oneHour = moment().add(1, "hour").valueOf();

//   user.tokenExp = oneHour;
//   user.token = token;
//   user.save(function (err, user) {
//     if (err) return cb(err);
//     cb(null, user);
//   });
// };

// userSchema.statics.findByToken = function (token, cb) {
//   var user = this;

//   jwt.verify(token, "secret", function (err, decode) {
//     user.findOne({ _id: decode, token: token }, function (err, user) {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };

const User = mongoose.model('User', userSchema);

module.exports = { User };
