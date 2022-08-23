const bcrypt = require('bcrypt');

// Minimum eight characters, at least one letter, one number and one special character:
const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
// Support international names
const nameRegex = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

async function generateHash(password) {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword
}

class User {
  constructor({ firstName, lastName, email, password }) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.passwordValidated = false
    this.passwordNotHashed = true
  }

  validPassword(passwordStr) {
    const isValid = passwordRegex.test(passwordStr)
    this.passwordValidated = isValid
    return isValid
  }

  validateName(nameStr) {
    return nameRegex.test(nameStr) && nameStr.length <= 25 && nameStr.length > 0
  }

  validateEmail(emailStr) {
    return emailRegex.test(emailStr)
  }

  validateUserData() {
    if (this.validPassword(this.password)) {
      this.generateHashedPassword()
    } else {
      return false
    }

    return this.validateName(this.firstName) && this.validateName(this.lastName) && this.validateEmail(this.email)
  }


  async generateHashedPassword() {
    if (this.passwordValidated && this.passwordNotHashed) {
      const hashPassword = await generateHash(this.password)
      this.passwordNotHashed = false
      this.password = hashPassword
    }
  }

  getData() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
  }
}

module.exports = User;