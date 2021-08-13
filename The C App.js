function addUser()
 {
 user_name = document.getElementById("user_name").value;
//  pleae write dot instead of equal in below code 
 localStorage.setItem("user_name",user_name);

window.location =  "The C App_room.html";

 }