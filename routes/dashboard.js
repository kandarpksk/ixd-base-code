
/*
 * GET home page.
 */
var indexI = 0;
var indexJ = 0;

exports.view = function(req, res){
	res.render('dashboard');
};

function clickShirt(e) {
	var shirt = ["/images/shirt1.png","/images/shirt2.png","/images/shirt3.png","/images/shirt4.png"];
	var x = document.getElementById("Shirt");
	indexI += 1;
	x.setAttribute( "src", shirt[indexI] );

}

function clickPants(e) {
	var pants = ["/images/pant1.png","/images/pant2.png","/images/pant3.png","/images/pant4.png"];
	var y = document.getElementById("Pants");
	indexJ += 1;
	y.setAttribute( "src", pants[indexJ] );
}