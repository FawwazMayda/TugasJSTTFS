

alert(d3.select("div").text());

d3.select("p").style("color","blue")

var testData = [
    ["a","a","a","a"],
    ["b","b","b","b"],
    ["c","c","c","c"],
    ["d","d","d","d"]
]

function isi(){
    var tr = d3.select("#results").append("tbody").selectAll("tr")  
        .data(testData, function(d,i){
        if (i > 0 ) {   // don't need the first row
            return d;  
        }
        })
        .enter()
        .append("tr");


// Now create the table cells

var td = tr.selectAll("td")
        .data(function(d) {return d; })
        .enter()
        .append("td")
        .text(function(d) {return d;});
}



