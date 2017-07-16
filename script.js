var minSleep = 1800000; //minimum time to sleep between bumps in milliseconds, 1800000 = 32 min
var maxSleep = 2400000; //maximum time to sleep between bumps in milliseconds, 2400000 = 40 min

var tradeIds = $(".trade:not(trade-closed)").attr("data-tradeid"); //grab trades

console.info("auto bumping...");

//start loop
setInterval(function() {
  var index = 0;

  //wait if you have multiple trades
  var multTradeDelay = setInterval(function() {
    //bump a trade
    App.api.request('trade.bump', {
        tradeid: tradeIds[index]
    }, function(data) {
        if (data.bumped) {
            console.info("trade " + tradeIds[index] + " successfully bumped");
        } else {
            console.info("trade " + tradeIds[index] + " failed to bump");
        }
    }, function(message) {
        console.info("an error occured: " + message);
    });

    index++;

    if (index === tradeIds.length) {
      clearInterval(multTradeDelay);
    }

  }, getRandom(500, 1500));

}, getRandomInt(minSleep, maxSleep));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
