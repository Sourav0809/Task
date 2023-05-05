const btn = document.querySelector("#form-submit")
const usrname = document.querySelector(".name")
const email = document.querySelector(".email")
const mobno = document.querySelector(".number")
const place = document.querySelector(".place")
const date = document.querySelector(".date")
const time = document.querySelector(".time")


btn.addEventListener("click", myfunction)

function myfunction(e) {
    e.preventDefault()

    if (usrname.value == "" || email.value == "" || mobno.value == "") {
        alert("Something is missing")
    }
    else {

        console.log("name: " + usrname.value)
        console.log("email: " + email.value)
        console.log("mob no: " + mobno.value)
        console.log("place : " + place.value)
        console.log("time: " + time.value)
        console.log("date: " + date.value)
    }
}


document.querySelector(".myform").addEventListener("mouseover", myfunction)

function myfunction() {
    console.log("I'm in the Form")
}


document.querySelector(".myform").addEventListener("mouseleave", myfunctiontwo)


function myfunctiontwo() {
    console.log("I'm Out of the form")
}
