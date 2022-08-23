const bcrypt = require('bcrypt');

// Minimum eight characters, at least one letter, one number and one special character:
const passwordRegex = new RegExp(/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/)
// Support international names
const nameRegex = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
const emailRegex = new RexExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)

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
    return nameRegex.test(nameStr)
  }

  validateEmail(emailStr) {
    return emailRegex.test(emailStr)
  }

  validateUserData() {
    if (this.validPassword(this.password)) {
      this.generateHashedPassword()
    }

    return this.validName(this.firstName) && this.validName(this.lastName) && this.validEmail(this.email)
  }

  generateHashedPassword() {
    if (this.passwordValidated && this.passwordNotHashed) {
      const hashPassword = await bcrypt.hash(this.password, 10);
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