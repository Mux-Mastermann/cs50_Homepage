function websiteCount() {
  websitesPerMinute = 380;
  websitesPerDay = websitesPerMinute * 60 * 24;
  msg = "Approximately " + websitesPerMinute + " websites are created every minute! That makes about " + websitesPerDay + " websites per day!";
  alert(msg);
}

function js() {
  setTimeout(function() {
    document.querySelector(".fun").innerHTML = "JS";
  }, 3000);
  // // make JavaScript Heading to JS
  // document.querySelector(".fun").innerHTML = "JS";
}

function fun() {
  document.querySelector(".navbar").style.visibility = "hidden";
  document.querySelector(".jumbotron").style.backgroundColor = "pink";
  document.querySelector(".fun").innerHTML = "LOL";
  setTimeout(function() {
    document.querySelector(".navbar").style.visibility = "visible";
    document.querySelector(".jumbotron").style.backgroundColor = "#e9ecef";
    document.querySelector(".fun").innerHTML = "JS";
  }, 5000);
}
