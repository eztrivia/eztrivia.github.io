
function fakecounter(){


var decrease_increase=50000

var counterdate=new Date()
var currenthits=counterdate.getTime().toString()
currenthits=parseInt(currenthits.substring(2,currenthits.length-4))+decrease_increase

document.write("You are visitor # <b>"+currenthits+"</b> to my site!")
}
fakecounter()

