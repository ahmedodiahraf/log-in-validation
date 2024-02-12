




// User Validation Default
let userValid = false
let ageValid = false
let passwordValid = false

// Recommendation Span Issues declaration
let userIssues = document.querySelector(".userissues")
let ageIssues = document.querySelector(".ageissues")
let passwordIssues = document.querySelector(".passissues")

// inputs declaration
let userInput = document.querySelector(".name")
let ageInput = document.querySelector(".age")
let passwordInput = document.querySelector(".password")

// form declaration
let form = document.querySelector(".form")

// submit button declaration
let sbBtn = document.querySelector(".submit")

// ONLOAD FUNCTION
window.addEventListener("load", function () {
     userInput.value = "NAME"
     ageInput.value = "AGE"
     passwordInput.value = "PASSWORD"
     userInput.style.color = "rgba(255, 255, 255, 0.413)"
     userInput.style.textShadow = "0 0 5px grey"
     ageInput.style.color = "rgba(255, 255, 255, 0.413)"
     ageInput.style.textShadow = "0 0 5px grey"
     passwordInput.style.color = "rgba(255, 255, 255, 0.413)"
     passwordInput.style.textShadow = "0 0 5px grey"
})

// onclick removing inputs' value
userInput.addEventListener("focus", function () {
     if (userInput.value = "NAME") {
          userInput.value = ""
          userInput.style.color = "white"
          userInput.style.boxShadow = "0 0 10px -1px black"
     }
})
ageInput.addEventListener("focus", function () {
     if (ageInput.value = "AGE") {
          ageInput.value = ""
          ageInput.style.color = "white"
          ageInput.style.boxShadow = "0 0 10px -1px black"
     }
})
passwordInput.addEventListener("focus", function () {
     if (passwordInput.value = "PASSWORD") {
          passwordInput.value = ""
          passwordInput.style.color = "white"
          passwordInput.style.boxShadow = "0 0 10px -1px black"
     }
})

// onBlur return the default inputs' value
userInput.addEventListener("blur", function () {
     if (userInput.value === "") {
          userInput.value = "NAME"
          userInput.style.color = "rgba(255, 255, 255, 0.413)"
          userInput.style.textShadow = "0 0 5px grey"
     }
     if  (userIssues.innerHTML !== "") {
          if (userInput.value === "" || userInput.value === "NAME") {
               userIssues.style.textShadow = "0 0 8px red"
               userIssues.style.color = "red"
               userInput.style.boxShadow = "0 0 20px -1px red"
               userIssues.innerHTML = "Please enter your username"
          } else if (!/^[a-zA-Z]+$/.test(userInput.value)) {
               userIssues.style.textShadow = "0 0 8px red"
               userIssues.style.color = "red"
               userInput.style.boxShadow = "0 0 20px -1px red"
               userIssues.innerHTML = "Your username must only consist of letters"
          } else if (userInput.value.length > 10) {
               userIssues.style.textShadow = "0 0 8px red"
               userIssues.style.color = "red"
               userInput.style.boxShadow = "0 0 20px -1px red"
               userIssues.innerHTML = "Your username must be less than 10 characters"
          } else {
               userValid = true
               userInput.style.boxShadow = "0 0 20px -1px greenYellow"
               userIssues.style.color = "greenYellow"
               userIssues.style.textShadow = "0 0 8px greenYellow"
               userIssues.innerHTML = "valid"
          }
     }
})
ageInput.addEventListener("blur", function () {
     if (ageInput.value === "") {
          ageInput.value = "AGE"
          ageInput.style.color = "rgba(255, 255, 255, 0.413)"
          ageInput.style.textShadow = "0 0 5px grey"
     }
     if (ageIssues.innerHTML !== "") {
          if (ageInput.value === "" || ageInput.value === "AGE") {
               ageIssues.style.color = "red"
               ageIssues.style.textShadow = "0 0 8px red"
               ageIssues.innerHTML = "Please enter your age"
               ageInput.style.boxShadow = "0 0 20px -1px red"
          } else if (isNaN(ageInput.value)) {
               ageIssues.style.color = "red"
               ageIssues.style.textShadow = "0 0 8px red"
               ageIssues.innerHTML = "Your age must not include any letters"
               ageInput.style.boxShadow = "0 0 20px -1px red"
          } else {
               ageValid = true
               ageInput.style.boxShadow = "0 0 20px -1px greenYellow"
               ageIssues.style.color = "greenYellow"
               ageIssues.style.textShadow = "0 0 8px greenYellow"
               ageIssues.innerHTML = "valid"
          }
     }
})
passwordInput.addEventListener("blur", function () {
     if (passwordInput.value === "") {
          passwordInput.value = "PASSWORD"
          passwordInput.style.color = "rgba(255, 255, 255, 0.413)"
          passwordInput.style.textShadow = "0 0 5px grey"
     }
     if (passwordIssues.innerHTML !== "") {
          if (passwordInput.value === "" || passwordInput.value === "PASSWORD") {
               passwordIssues.style.color = "red"
               passwordIssues.style.textShadow = "0 0 8px red"
               passwordIssues.innerHTML = "Put your password pls"
               passwordInput.style.boxShadow = "0 0 20px -1px red"
          } else if (passwordInput.value.length > 8) {
               passwordIssues.style.color = "red"
               passwordIssues.style.textShadow = "0 0 8px red"
               passwordIssues.innerHTML = "Your Password Must Be Less Than 8 Numbers"
               passwordInput.style.boxShadow = "0 0 20px -1px red"
          } else if (isNaN(passwordInput.value)) {
               passwordIssues.style.color = "red"
               passwordIssues.style.textShadow = "0 0 8px red"
               passwordIssues.innerHTML = "Your password must not include any letters"
               passwordInput.style.boxShadow = "0 0 20px -1px red"
          } else {
               passwordValid = true
               passwordInput.style.boxShadow = "0 0 20px -1px greenYellow"
               passwordIssues.style.color = "greenYellow"
               passwordIssues.style.textShadow = "0 0 8px greenYellow"
               passwordIssues.innerHTML = "valid"
          }
     }
})

// Inputs' Validation
document.forms[0].onsubmit = function (e) {
     // Username validation
     if (userInput.value === "" || userInput.value === "NAME") {
          userIssues.innerHTML = "Please enter your username"
          userInput.style.boxShadow = "0 0 20px -1px red"
     } else if (!/^[a-zA-Z]+$/.test(userInput.value)) {
          userIssues.innerHTML = "Your username must only consist of letters"
          userInput.style.boxShadow = "0 0 20px -1px red"
     } else if (userInput.value.length > 10) {
          userIssues.innerHTML = "Your username must be less than 10 characters"
          userInput.style.boxShadow = "0 0 20px -1px red"
     } else {
          userValid = true
          userInput.style.boxShadow = "0 0 20px -1px greenYellow"
          userIssues.style.color = "greenYellow"
          userIssues.style.textShadow = "0 0 8px greenYellow"
          userIssues.innerHTML = "valid"
     }
     // Age validation
     if (ageInput.value === "" || ageInput.value === "AGE") {
          ageIssues.innerHTML = "Please enter your age"
          ageInput.style.boxShadow = "0 0 20px -1px red"
     } else if (isNaN(ageInput.value)) {
          ageIssues.innerHTML = "Your age must not include any letters"
          ageInput.style.boxShadow = "0 0 20px -1px red"
     } else {
          ageValid = true
          ageInput.style.boxShadow = "0 0 20px -1px greenYellow"
          ageIssues.style.color = "greenYellow"
          ageIssues.style.textShadow = "0 0 8px greenYellow"
          ageIssues.innerHTML = "valid"
     }
     // Password validation
     if (passwordInput.value === "" || passwordInput.value === "PASSWORD") {
          passwordIssues.innerHTML = "Put your password pls"
          passwordInput.style.boxShadow = "0 0 20px -1px red"
     } else if (passwordInput.value.length > 8) {
          passwordIssues.innerHTML = "Your Password Must Be Less Than 8 Numbers"
          passwordInput.style.boxShadow = "0 0 20px -1px red"
     } else if (isNaN(passwordInput.value)) {
          passwordIssues.innerHTML = "Your password must not include any letters"
          passwordInput.style.boxShadow = "0 0 20px -1px red"
     } else {
          passwordValid = true
          passwordInput.style.boxShadow = "0 0 20px -1px greenYellow"
          passwordIssues.style.color = "greenYellow"
          passwordIssues.style.textShadow = "0 0 8px greenYellow"
          passwordIssues.innerHTML = "valid"
     }
     // reset style default
     if (userValid === true && ageValid === true && passwordValid === true) {
          userInput.style.boxShadow = "0 0 10px -1px black"
          ageInput.style.boxShadow = "0 0 10px -1px black"
          passwordInput.style.boxShadow = "0 0 10px -1px black"
          userIssues.innerHTML = ""
          ageIssues.innerHTML = ""
          passwordIssues.innerHTML = ""
          // Accepting cookies
          let confirmMsg = confirm("Are You Sure You Want To Accept Cookies")
          if (confirmMsg === false) {
               e.preventDefault()
               location.reload()
          }
     }
     // prevent submitting data
     if (userValid === false || ageValid === false || passwordValid === false) {
          e.preventDefault()
     }
}






















