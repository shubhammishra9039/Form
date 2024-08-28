let userData =localStorage.getItem("userinfo")
let Token =   JSON.parse(localStorage.getItem("Token"))
console.log( Token);

let table =document.getElementById("userData")


userData =JSON.parse(userData)
console.log(userData);



let  {Name,LastName,Phone,Email,confirmpassword,password} =userData[Token]

table.innerHTML=`
<tr>
                <td> ${Name}</td>
                <td>${LastName}</td>
                <td>${Email}</td>
                <td>${Phone}</td>
                <td>${password}</td>
                <td>${confirmpassword}</td>
            </tr> `