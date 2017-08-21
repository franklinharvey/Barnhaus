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
	var database = firebase.database();

	const txtEmail = document.getElementById('txtEmail');
	const txtName = document.getElementById('txtName');
	const txtComments = document.getElementById('txtComments');
	const btnSignUp = document.getElementById('btnSignUp');

	btnSignUp.addEventListener('click', e => {
		const email = txtEmail.value;
		const name = txtName.value;
		const comments = txtComments.value;

		if (email == "") {
			alert("Please enter an email address");
			return;
		}
		if (name == "") {
			alert("Please enter your name");
			return;
		}
		saveUser(email,name,comments);
		// clearField(email,name,comments);
	});

	function saveUser(email,name,comments) {
		const eventTime = new Date();
		const entry = firebase.database().ref("EmailList").push().key;

		firebase.database().ref("EmailList/" + entry).set({
			Name: name,
			Comments: comments,
			Email: email,
			DateAdded: eventTime.toString()
		});

	};
	
	function clearField(email,name,comments) {
		email.value = "";
		name.value = "";
		comments.value = "";
	};

}());
