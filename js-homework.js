// HOMEWORK 1
var name = prompt("Enter your name");
var time;
var place = "work";
var a;
var event = prompt("Enter the event: 'go' or 'comes' ");

switch(event) {
	case 'go':
		a = "to";
		time = "08.00";
		console.log(name +" "+ event +" "+ a +" "+ place +" "+ "at" +" "+ time);
        break;
    case "comes":
    	a = "from";
    	time = "18.00";
    	console.log(name +" "+ event +" "+ a +" "+ place +" "+ "at" +" "+ time);
    	break;
    default: console.log("It is not a valid event");
}

// HOMEWORK 2

var eur = prompt("Enter the amount of euros");
var usd = prompt("Enter the amount of dollars");
var uah;
var eur_usd = 1.19;
var eur_uah = 32.18;
var usd_uah = 27.15;
alert(eur + " euros are equal " + (eur * eur_uah) + " grns, " + usd + " dollars are equal " + (usd * usd_uah) + " grns, one euro is equal " + eur_usd + " dollars.");

document.write("https://kurs.com.ua/konverter/ 05.12.2017");
