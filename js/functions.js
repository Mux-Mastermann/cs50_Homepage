function websiteCount() {
    websitesPerMinute = 380;
    websitesPerDay = websitesPerMinute * 60 * 24;
    msg = "Approximately " + websitesPerMinute + " websites are created every minute! That makes about " + websitesPerDay + " websites per day!";
    alert(msg);
}
