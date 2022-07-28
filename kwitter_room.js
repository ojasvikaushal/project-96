

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCuvoYwyAs5k_H_-fJzT8DaWhnV2oW2sUU",
      authDomain: "letschat-web-app-abe31.firebaseapp.com",
      databaseURL: "https://letschat-web-app-abe31-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-abe31",
      storageBucket: "letschat-web-app-abe31.appspot.com",
      messagingSenderId: "107311459275",
      appId: "1:107311459275:web:2857d23219e067a077a44e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
