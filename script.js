var tradeIds = $(".trade:not(trade-closed)").attr("data-tradeid");
var minSleep = 1800000; //minimum time to sleep between bumps in milliseconds, 1800000 = 32 min
var maxSleep = 2400000; //maximum time to sleep between bumps in milliseconds, 2400000 = 40 min

//start loop
setTimeout(function() {

}, getRandomInt(minSleep, maxSleep));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// $.post("http://www.tf2outpost.com/api/core",
// {
//     name: "Donald Duck",
//     city: "Duckburg"
// },
// function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
// });
