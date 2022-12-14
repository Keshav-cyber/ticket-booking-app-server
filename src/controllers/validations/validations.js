//Value Validation
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value != 'string' || value.trim().length === 0) return false
    return true
}

// Name Validation
const isValidName = function (name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/         ///^[a-zA-Z0-9@$!%*#?&]{8,15}$/
    return nameRegex.test(name)
}

//Mobile Number Validation
const isValidMobile = function (mobile) {
    const mobileRegex = /^[0]?[6789]\d{9}$/
    return mobileRegex.test(mobile)
}

//Email Validation
const isValidEmail = function (email) {
    const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
    return emailRegex.test(email)
}

//Password Validation
const isValidPassword = function (password) {
    const passRegex = /^[a-zA-Z0-9@$!%*#?&]{8,15}$/
    ///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    return passRegex.test(password)
}

//Date Validation
const isValidDate = function (date) {
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    return dateRegex.test(date)
}


module.exports = { isValid, isValidName, isValidMobile, isValidEmail, isValidPassword, isValidDate}