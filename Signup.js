let signup = document.signup;
let userName = signup.name;
let userLastName = signup.lsatname;
let UserNumber = signup.number;
let userEmail = signup.email;
let userPassword = signup.password;
let userCnPassword = signup.confirmpassword;

let errorMsg = document.getElementById("errorMsg");

function resetBorders() {
  userName.style.border = "";
  userLastName.style.border = "";
  UserNumber.style.border = "";
  userEmail.style.border = "";
  userPassword.style.border = "";
  userCnPassword.style.border = "";
}

function validation(e) {
  e.preventDefault();
  resetBorders();
  let userNameValidation = /^[A-Za-z]+$/g.test(userName.value.trim());
  let userNumberValidation = /^[6-9][0-9]{9}/g.test(UserNumber.value.trim());
  let Mistake =0
  let isValid=true
  if (
    userName.value == "" ||
    userLastName.value == "" ||
    UserNumber.value == "" ||
    userPassword.value == "" ||
    userCnPassword.value == "" ||
    !userNameValidation ||
    !userNumberValidation || userPassword.value != userCnPassword.value
  ) {
    errorMsg.innerText = "Pleased Fill All The Field";

    if (!userName.value || !userNameValidation) {
      errorMsg.innerText = "  Pleased Fill Only  Alphabet ";
      userName.style.border = " 2px solid red";
      Mistake++;
    }
    if (!userLastName.value || !userNameValidation) {
      errorMsg.innerText = "  Pleased Fill Only  Alphabet ";
      userLastName.style.border = " 2px solid red";
      Mistake++;
    }
    if (!UserNumber.value || !userNumberValidation) {
      errorMsg.innerText = "  Invalid Number ";
      UserNumber.style.border = " 2px solid red";
      Mistake++;
    }
    if (!userEmail.value) {
      errorMsg.innerText = "  Email Invalid ";
      userEmail.style.border = " 2px solid red";
      Mistake++;
    }
    if (!userPassword.value) {
      userPassword.style.border = " 2px solid red";
      Mistake++;
    }
    if (!userCnPassword.value) {
      userCnPassword.style.border = " 2px solid red";
      Mistake++;
    }

    if (userPassword.value != userCnPassword.value) {
      errorMsg.innerText = "  Pleased Check Password ";
      userPassword.style.border = " 2px solid red";
      userCnPassword.style.border = " 2px solid red";
      Mistake++;
    }

    if(Mistake)
    {
      errorMsg.innerText = "  Pleased Fill All The Field  Carefully ";
    }
    isValid=false
    return false;
  }
  

    if(isValid)
    {

      let userobj = {}
      userobj.Name =userName.value
      userobj.LastName =userLastName.value
      userobj.Phone =UserNumber.value
      userobj.Email =userEmail.value
      userobj.password =userPassword.value
      userobj.confirmpassword =userCnPassword.value

      let userData =JSON.parse(localStorage.getItem("userinfo") )  || []

      let isUserAlliable = userData.some(({ Email , Phone })=>
      {
          return Email === userEmail.value || Phone === UserNumber.value
      })


      if(!isUserAlliable)
      {
        userData.push(userobj)
        localStorage.setItem("userinfo", JSON.stringify(userData))

      }
      else
      {
        errorMsg.innerText = "  Already Resituated";

      }


      

      
      


          

     
    }



  alert("Done ");
}
