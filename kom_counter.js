/* This is called on the https://www.strava.com/athletes/<<athlete number>>/segments/leader page */
var th = document.createElement('th');
th.innerHTML = "#";
document.getElementsByClassName("my-segments")[0].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].prepend(th);

var i = 1;

var uls = document.getElementsByTagName("ul")
for(let ul of uls) {
    if(ul.classList.contains("pagination")) {
        var numPages = document.getElementsByClassName("active")[0].innerText
        i = (numPages - 1) * 20 + 1
    }

}
var rows = document.getElementsByClassName("my-segments")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
for (let row of rows) {
    var td = document.createElement("td");
    td.innerText = i;
    row.prepend(td);
    i++;
}
