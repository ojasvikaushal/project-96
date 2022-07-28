//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAN5GJO8W08l1qhela4t2Awtvr0_FTpok8",
      authDomain: "kwitter-73525.firebaseapp.com",
      databaseURL: "https://kwitter-73525-default-rtdb.firebaseio.com",
      projectId: "kwitter-73525",
      storageBucket: "kwitter-73525.appspot.com",
      messagingSenderId: "62380526011",
      appId: "1:62380526011:web:97fd3c316baecd0a811c9e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 console.log("room name", room_name);
 console.log("user name", user_name);

function send()
{
     msg = document.getElementById("msg").value;
     console.log("Message"+msg);
     firebase.database().ref(room_name).push({
           username : user_name,
           message : msg,
           like : 0
     });
       document.getElementById("msg").value = "";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

