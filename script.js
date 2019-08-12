
var shoeItems = ["Yeezy Boost 350 V2 Static Non-Reflective", "Air Fear of God 1 Sail", "Travis Scott x Air Jordan 1 Retro High OG Mocha",
 "Sacai x LDV Waffle Varsity Blue", "OFF-WHITE x Air Jordan 1 Retro High OG Chicago", "OFF-WHITE x Air Presto The Ten",
"Tom Sachs x NikeCraft Mars Yard Overshoe White", "Air Jordan 3 Retro 88 2013", "SpongeBob SquarePants x Kyrie 5 Patrick"]; 
var shoePrices = [300, 465, 765,540, 2600, 1500, 640, 440, 180];
var total = 0;
var cartList = [];
var priceCart = [];



function add(items) {
	if(items === "yeezy") {
		cartList.push(shoeItems[0]);
		priceCart.push(shoePrices[0]);
	}else if(items === "fearofgod") {
		cartList.push(shoeItems[1]);
		priceCart.push(shoePrices[1]);
	}else if(items === "travisscott") {
		cartList.push(shoeItems[2]);
		priceCart.push(shoePrices[2]);
	}else if(items === "sacai") {
		cartList.push(shoeItems[3]);
		priceCart.push(shoePrices[3]);
	}else if(items === "owchi") {
		cartList.push(shoeItems[4]);
		priceCart.push(shoePrices[4]);
	}else if(items === "owpresto") {
		cartList.push(shoeItems[5]);
		priceCart.push(shoePrices[5]);
	}else if(items === "sachs") {
		cartList.push(shoeItems[6]);
		priceCart.push(shoePrices[6]);
	}else if(items === "aj3") {
		cartList.push(shoeItems[7]);
		priceCart.push(shoePrices[7]);
	}else if(items === "k5ps") {
		cartList.push(shoeItems[8]);
		priceCart.push(shoePrices[8]);
	}
}

function checkCart(){
	alert(cartList + " " + priceCart);
}

function checkout() {
	for(var i = 0; i < priceCart.length; i++) {
		total += priceCart[i]
	}
		alert("$" + total);
}