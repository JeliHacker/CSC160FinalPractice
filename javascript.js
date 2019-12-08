var names = ["bob", "fred", "cobra", "dog", "zebra"];

var colorScale = d3.scaleOrdinal(d3.schemeTableau10); 

d3.select("svg")
    .selectAll("g")
    .data(names)
    .enter()
    .append("g")
    .attr("transform", function(d, index)
         {
    var index1 = index + 2;
    return "translate(50," + 
        index * 20 + ")";
})
    .attr("id", "legend")
    .append("line")
    .attr("x1", "0")
    .attr("x2", "200") 
    .attr("y1", "0")
    .attr("y2", "0")
    .attr("stroke", function(d)
    {
    return colorScale(d);
    })

d3.selectAll("g")
    .append("text")
    .text(function(d)
         {
    return d
})
    .attr("x", 200)
    .attr("y", 10)