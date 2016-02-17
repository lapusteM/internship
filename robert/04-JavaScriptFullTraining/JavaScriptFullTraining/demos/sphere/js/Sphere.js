var Sphere = function (radius, numOfItems){

	var increment = Math.PI*(3-Math.sqrt(5));
	var offset = 2 / numOfItems;
	var y;
	var r;
	var phi;


	for (var i = numOfItems; i >= 0; i--) {
		y = i*offset-1+(offset/2);
		r = Math.sqrt(1 - y*y); //replace with "r = 1" for cylinder
		phi = i*increment;
		
		
		var sX = Math.cos(phi)*r*radius,
			sY = y*radius,
			sZ = Math.sin(phi)*r*radius;
		/*var sX = (Math.random() < 0.5 ? -0.5 : 0.5)*radius,
			sY = (Math.random() < 0.5 ? -0.5 : 0.5)*radius,
			sZ = (Math.random() < 0.5 ? -0.5 : 0.5)*radius;*/
		
		this.pointsArray.push(this.make3DPoint(sX, sY, sZ));
	}
	
	/*for (var i = numOfItems; i >= 0; i--) {
		var result = [];
		var s = parseInt(Math.random()*5); // returns 0 to 5, uniformly distributed
		var c= s%3; // get the axis perpendicular to the side you just picked

		result[c] = (s > 2 ? 1 : 0) * radius;
		result[(c+1)%3] = Math.random() * radius;
		result[(c+2)%3] = Math.random() * radius;
		
		this.pointsArray.push(this.make3DPoint(result[0], result[1], result[2]));
	}*/
	
	/*var dimension = 2;
	var numOfItems = parseInt(numOfItems/5);
	for (var n = 0; n < numOfItems; n++) {
		for (var m = 0; m < dimension; m++) {
			var myX = Math.ceil(Math.random() * dimension) - 1,
				myY = Math.ceil(Math.random() * 2) - 1,
				myZ = Math.random();

			this.pointsArray.push(this.make3DPoint(myX*radius, myY*radius, myZ*radius));
		}
	}*/
};

Sphere.prototype = new DisplayObject3D();
