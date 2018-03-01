"use strict";
let firebase = require("./fb-config"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;


function logInGoogle(){
    return firebase.auth().signInWithPopup(provider);
}

function logOut(){
    return firebase.auth().signOut();
}

function setUser(val){
	currentUser = val;
}

function getUser() {
    return currentUser;
}

//this requires for the user to log in in order to do anything
firebase.auth().onAuthStateChanged(function(user){
	console.log("onAuthStateChanged", user);
	if (user){
		currentUser = user.uid;
	}else{
		currentUser = null;
		console.log("NO USER LOGGED IN");
	}
});

module.exports = {logInGoogle, logOut, setUser, getUser};
