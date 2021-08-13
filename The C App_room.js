var firebaseConfig = {
      apiKey: "AIzaSyBBNJXTmZ0s5Y4wMCvhWKpFLuCpJkqKy4g",
      authDomain: "ankit-816a6.firebaseapp.com",
      databaseURL: "https://ankit-816a6-default-rtdb.firebaseio.com",
      projectId: "ankit-816a6",
      storageBucket: "ankit-816a6.appspot.com",
      messagingSenderId: "383087161178",
      appId: "1:383087161178:web:236ba4880ba49a5e460d63"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "The C App_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room  Name - " + Room_names);
                  // PLEASE CHECK THE SPACE AFTER INVERTED COMMA E.G. LIKE "<DIV CLASS" IN BELOW
                  row = "<div class= 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "The C App_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
