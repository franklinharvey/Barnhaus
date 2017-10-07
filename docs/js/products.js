var config = {
  apiKey: "AIzaSyBbAS6KCerk3PJlzmxnYitajzij4cZ9CZU",
  authDomain: "barnhouse-78075.firebaseapp.com",
  databaseURL: "https://barnhouse-78075.firebaseio.com",
  projectId: "barnhouse-78075",
  storageBucket: "barnhouse-78075.appspot.com",
  messagingSenderId: "727310305344"
};
firebase.initializeApp(config);
var database = firebase.database().ref("Products");
productsList = document.getElementById('productsList');


database.on('value', function(snapshot) {
  colDiv = document.createElement("div");
  colDiv.className = "col-sm-4";
  // updatePost(postElement, snapshot.val());
});
