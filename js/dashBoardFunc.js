var indexI = 0;
var indexJ = 0;

// Call this function when page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready. 
 */
 function initalizePage() {
 	console.log("dashBoardFunc is connected");
 }

// Call this function when shirt button get clicked 
function clickShirt(e) {
	var shirt = ["/images/shirt1.png","/images/shirt2.png","/images/shirt3.png","/images/shirt4.png"];
	var x = document.getElementById("Shirt");
	indexI += 1;
	x.setAttribute( "src", shirt[indexI] );

}

// Call this fucntion when pants button get clicked 
function clickPants(e) {
	var pants = ["/images/pant1.png","/images/pant2.png","/images/pant3.png","/images/pant4.png"];
	var y = document.getElementById("Pants");
	indexJ += 1;
	y.setAttribute( "src", pants[indexJ] );
}