const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week11/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    },
    {
        label: "Week 12 notes",
        url: "week12/index.html"
    },
    {
        label: "Week 13 notes",
        url: "week13/index.html"
    },
    {
        label: "Week 14 notes",
        url: "week14/index.html"
    }
];


var ol = document.createElement('ol');


links.forEach((l) => {

    var li = document.createElement("li");
    var li_a = document.createElement("a"); 
    var link_text = document.createTextNode(l.label);
    li_a.href = l.url;
    console.log(li);
    li_a.appendChild(link_text);
    li.appendChild(li_a);
    ol.appendChild(li);

})

var element = document.getElementById('notes');
element.appendChild(ol);