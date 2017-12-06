// HOMEWORK 1
do{
var name = prompt("Enter your name");}
while(!name.match(/[a-zA-Z]/));
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
do{
        
        var eur = prompt ('Enter the amount of euros');}

while(isNaN(eur) || eur.match(/\s/) || !eur.match(/\w/));
do{
        
        var usd = prompt ('Enter the amount of dollars');}

while(isNaN(usd) || usd.match(/\s/) || !usd.match(/\w/));
var uah;
var eur_usd = 1.19;
var eur_uah = 32.18;
var usd_uah = 27.15;
alert(eur + " euros are equal " + (eur * eur_uah).toFixed(2) + " grns, " + usd + " dollars are equal " + (usd * usd_uah).toFixed(2) + " grns, one euro is equal " + eur_usd + " dollars.");

document.write("https://kurs.com.ua/konverter/ 05.12.2017");
