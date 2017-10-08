$(function() {
  var config = {
    apiKey: "AIzaSyBbAS6KCerk3PJlzmxnYitajzij4cZ9CZU",
    authDomain: "barnhouse-78075.firebaseapp.com",
    databaseURL: "https://barnhouse-78075.firebaseio.com",
    projectId: "barnhouse-78075",
    storageBucket: "barnhouse-78075.appspot.com",
    messagingSenderId: "727310305344"
  };
  firebase.initializeApp(config);
  database = firebase.database().ref("Products");
  productsList = document.getElementById('productsList');
  pathArray = window.location.pathname.split( '/' );
  itemType = pathArray[2];
  console.log(itemType);

  if (itemType == "shirts") {
    database.orderByChild("Type").equalTo("shirt").on("child_added", function(snapshot) {
      renderElements(snapshot, productsList);
    });
  }
  else if (itemType == "sweatshirts") {
    database.orderByChild("Type").equalTo("sweatshirt").on("child_added", function(snapshot) {
      renderElements(snapshot, productsList);
    });
  }
  else if (itemType == "hats") {
    database.orderByChild("Type").equalTo("hat").on("child_added", function(snapshot) {
      renderElements(snapshot, productsList);
    });
  }
  else {
    database.on('child_added', function(snapshot) {
      renderElements(snapshot, productsList);
    });
  }

  function renderElements(snapshot, productsList) {
    colDiv = document.createElement("div");
    colDiv.className = "col-sm-4";

    linkTag = document.createElement("a");
    linkTag.href = snapshot.val().buyURL;
    linkTag.target = '_blank';

    idAndClassDiv = document.createElement("div");
    idAndClassDiv.id = snapshot.key;
    idAndClassDiv.className = "product";
    idAndClassDiv.style.backgroundImage = "url('" + snapshot.val().Image + "')";

    productInfoDiv = document.createElement("div");
    productInfoDiv.className = "product-info";

    productName = document.createElement("h3");
    productName.className = "product-name text-center";
    productName.innerHTML = snapshot.val().Name;

    productPrice = document.createElement("h4");
    productPrice.className = "product-price text-center";
    productPrice.innerHTML = snapshot.val().Price;

    productInfoDiv.append(productName);
    productInfoDiv.append(productPrice);

    linkTag.append(idAndClassDiv);
    linkTag.append(productInfoDiv);

    colDiv.append(linkTag);

    productsList.append(colDiv);
  }
});
