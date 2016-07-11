
function increasePrice(amount) {
	this.price += amount;
}

function Product(name, price) {
	this.name = name;
	this.price = price;
	this.increasePrice = increasePrice;
}
	
var item = new Product("Soap", 5);
	
document.write("Product name: " + item.name + "<br>");
document.write("Old price: " + item.price + "<br>");
	
item.increasePrice(2);
	
document.write("New price: " + item.price + "<br>");