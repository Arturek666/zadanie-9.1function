var triangle1Area,
 	triangle2Area,
	triangle3Area;

function getTriangleArea(a, h) {
if  ((a <= 0) || (h <= 0)) {
	return('Nieprawidłowe dane');	
}
else {
	return a*h/2;
}
};
console.log(getTriangleArea(-10, 6));

triangle1Area = getTriangleArea(5, 8);
console.log(triangle1Area)

triangle2Area = getTriangleArea(-5, 12);
console.log(triangle2Area)
triangle3Area = getTriangleArea(3, 4);
console.log(triangle3Area)

