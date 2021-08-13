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
room_name = localStorage.getItem("room_name");

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
      function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {
              childKey  = childSnapshot.key; 
            childData = childSnapshot.val();
             if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //    PLEASE COMMENT THE BELOW LINE OF CODE FOR FIREBASE MESSAGE ID INSIDE THE CONSOLE.LOG
      //    console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];

      //    PLEASE DELETE THE BELOW 5 LINES OF CODE 

      //    name_width_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
      //    message_width_tag = "<h4 class='message<h4>'>" + message + "</h4>";
      //    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+id+" onclick='updateLike(ths.id)'>";
      //    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      //    row = name_with_tag + message_with_tag +like_button + span_with_tag;

      // PLEASE ADD THE BELOW LINE OF CODE FOR ROW
      row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";       
        
      document.getElementById("output").innerHTML += row;
         

      } });  }); }
getData();

function updateLike(message_id) { 
      // console.log("clickedon like button - " + message_id);
       button_id = message_id;
        likes = document.getElementById(button_id).value; 
       updated_likes = Number(likes) + 1;
        console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes
 }); }

//  please add the below code for logout
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }