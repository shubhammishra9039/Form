let myForm = document.loginForm;

let userEmail = myForm.email;

let userPassword = myForm.Password;

let errorMgs = document.getElementById("erroemsg");
console.log(errorMgs);

function login(e) {
  let isValid = true;

  if (userEmail.value === "" || userPassword.value === "") {
    let Mistake = 0;
    if (!userEmail.value) {
      errorMgs.innerText = " Pleased Fill Username ";
      userEmail.style.border = " 2px solid red";
      Mistake++;
    }

    if (!userPassword.value) {
      errorMgs.innerText = " Pleased Fill Password ";
      userPassword.style.border = " 2px solid red";
      Mistake++;
    }

    if (Mistake) {
      errorMgs.innerText = " Pleased Fill All The Field ";
      userEmail.style.border = " 2px solid red";
      userPassword.style.border = " 2px solid red";
    }

    return false;
  }

  if (isValid) {
    let userData = JSON.parse(localStorage.getItem("userinfo"));

    let Token = userData.findIndex(({ Email, confirmpassword }) => {
      return (
        Email === userEmail.value && confirmpassword === userPassword.value
      );
    });

    if (Token < 0) {
      errorMgs.innerText = " User Not Found";
    } else {
      window.location.href = "../OTP Page/otp.html";
        let otp = Math.floor(100000+ Math.random()*999999)

        localStorage.setItem("otp",JSON.stringify(otp))
        localStorage.setItem("Token",JSON.stringify(Token))

    }

    e.preventDefault();
  }
}
