// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrzbbLPiQHCoxix5Feypt5MbM1SceYbWY",
  authDomain: "web-ap-1b484.firebaseapp.com",
  databaseURL: "https://web-ap-1b484-default-rtdb.firebaseio.com",
  projectId: "web-ap-1b484",
  storageBucket: "web-ap-1b484.appspot.com",
  messagingSenderId: "434424770735",
  appId: "1:434424770735:web:976607b9d5462c9fdbe45a",
  measurementId: "G-KH21CJK5R2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get references to HTML elements
  var fileText = document.querySelector(".fileText");
  var uploadPercentage = document.querySelector(".uploadPercentage");
  var progress = document.querySelector(".progress");
  var percentVal;
  var fileItem;
  var fileName;
  var img = document.querySelector("#uploadedImage");
  
  // Handle file selection
  function getFile(e) {
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
  }
  
  // Upload the image to Firebase Storage
  function uploadImage() {
    let storageRef = firebase.storage().ref().child(`images/${fileName}`);
    let uploadTask = storageRef.put(fileItem);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        percentVal = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal.toFixed(2) + "%";
        progress.style.width = percentVal.toFixed(2) + "%";
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          console.log("Download URL:", url);
          img.setAttribute("src", url);
          img.style.display = "block";
        });
      }
    );
  }