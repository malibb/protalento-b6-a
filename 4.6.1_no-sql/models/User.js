const mongoose = require('mongoose')

const userSchema = {
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  }
}

const User = mongoose.model('User', userSchema)

const validateUser = async (email, password) => {
  const user = await User.find({email})

  if(user.password === password){
    return {
      email: user.email,
      name: user.name
    }
  } else {
    return null
  }

}

module.exports = {
  validateUser
}
