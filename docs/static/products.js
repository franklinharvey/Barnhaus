(function() {
		// Initialize Firebase
var config = {
		apiKey: "AIzaSyBbAS6KCerk3PJlzmxnYitajzij4cZ9CZU",
		authDomain: "barnhouse-78075.firebaseapp.com",
		databaseURL: "https://barnhouse-78075.firebaseio.com",
		projectId: "barnhouse-78075",
		storageBucket: "barnhouse-78075.appspot.com",
		messagingSenderId: "727310305344"
	};
	firebase.initializeApp(config);

	var productRef = firebase.database().ref("Products/");

	productRef.on('child_added', snap=> {
		//add products

		var productContainer = document.createElement('div');
		productContainer.className = "row";

	    var newProduct = document.createElement('div');
		newProduct.id = snap.key;
		newProduct.className = 'product col-sm-8';

		var textDiv = document.createElement('div');
		textDiv.className = 'container product-header';

		var nameElement = document.createElement('h2');
		nameElement.className = 'name';
		var productName = snap.val().Name;
		nameElement.innerHTML = productName;

		var priceElement = document.createElement('p');
		priceElement.className = 'price';
		var productPrice = snap.val().Price;
		priceElement.innerHTML = "$" + productPrice;

		var imgElement = document.createElement('img');
		imgElement.src="img/White.png"
		imgElement.className = 'img-responsive';

		var spacer1 = document.createElement('span');
		spacer1.className = "col-sm-2";

		var spacer2 = document.createElement('span');
		spacer2.className = "col-sm-2";

		textDiv.appendChild(nameElement);
		textDiv.appendChild(priceElement);

		newProduct.appendChild(imgElement);
		newProduct.appendChild(textDiv);

		productContainer.appendChild(spacer1);
		productContainer.appendChild(newProduct);
		productContainer.appendChild(spacer2);

		document.getElementById("products").appendChild(productContainer);
	});


}());
