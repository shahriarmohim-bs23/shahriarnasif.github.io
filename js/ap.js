var firebaseConfig = {
    apiKey: "AIzaSyAzPCV_7wO6Gx4M4nO2s-VxJoIr1myIT_o",
    authDomain: "contactform-d9b12.firebaseapp.com",
    databaseURL: "https://contactform-d9b12.firebaseio.com",
    projectId: "contactform-d9b12",
    storageBucket: "contactform-d9b12.appspot.com",
    messagingSenderId: "959865618582",
    appId: "1:959865618582:web:03e940d428b4eaab0e42b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  function showpastcomments(){
    var showat=document.getElementById('pastcomments');
    var commentsRef=firebase.database().ref('infos/');
    commentsRef.once('value',function(snapshot){
      snapshot.forEach(function (itemSnapshot){
        //Get the object for one snapshot
        var itemData=itemSnapshot.val();
        var message=itemData.message;
        var name=itemData.name;
     if(name==""){
       name="anonymous";
     }
        //var when=new Date(itemData.when).toLocaleDateString("en-us");
        showat.innerHTML+="<li><u>"+name+"</u><br>"+"<span>--"+message+"</span></li><br>";
      })
    })
    //alert('hello');
  }
  
  showpastcomments();