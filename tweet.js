  function format_tweet(event) {
    var __name__ = document.getElementById("myform").value;
    var data = require('./data.json');
    var array_len = data.length;
    var index = parseInt((Math.random() * 20) % array_len);
    var tweet = data[index]['tweet'].replace("__name__", __name__);
    
    window.location = "name.html";
    document.getElementById("tweet").innerHTML = tweet;
    event.preventDefault();
  }
  
  /*
  
  <div id="yourOutputDiv"></div>

var results = document.getElementById("activity_level").value + "</br>" +
              document.getElementById("target_bodyfat_pct").value + 
              document.getElementById("tw").value + "</br>";

document.getElementById("yourOutputDiv").innerHTML = results;


<button onclick="location.href = 'www.yoursite.com';" id="myButton" class="float-left submit-button" >Home</button>

*/