let otpForm = document.otpForm;

let userOTP = otpForm.otp;

let errorMsg = document.getElementById("errormsg");
let otpNo = document.getElementById("otpNO");
let timerText = document.getElementById("timer");

let dbOTP = JSON.parse(localStorage.getItem("otp"));

// console.log(timerText);

let timer = 25;

console.log(errorMsg);

// ! timer Function 
setInterval(() => {
  
  timer--;

  if (timer > 5) {
    timerText.innerText = "Time Left :" + timer;
  } else if (timer > 0) {
    timerText.innerText = "Time Left !!!!  " + timer;

    timerText.style.color = "red";
  } else {
        timerText.innerText = "Time Out !!! :" + timer;
        window.location.href = "../Login Page/login.html";
      }
    }, 1000);
    
    otpNo.innerText = "OTP : " + dbOTP;
    
    function verifyOTP(e) {
        let isValid = true;
        
        if (!userOTP.value) {
            errorMsg.innerText =" Please Fill OTP ";
            isValid=false
            
            return false
            
        }
        if (dbOTP != userOTP.value) {
            errorMsg.innerText = " OTP Not Correct ";
            isValid = false;
            return false;
        }
        
        if(isValid)
        {

            window.location.href="../Show Data/showData.html"
            e.preventDefault();
        }
}
