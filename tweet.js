  function format_tweet(event, context) {
    var __name__ = document.getElementById("myform").value;
    document.getElementById("demo").innerHTML = "Hello "+__name__;
    location.href = "name.html";
    event.preventDefault();
  }