/*
var names = ["bob", "fred", "cobra", "dog", "zebra"];

var colorScale = d3.scaleOrdinal(d3.schemeTableau10); 

var dataPromise = d3.json("collectionData.json")


d3.select("svg")
    .selectAll("g")
    .data(names)
    .enter()
    .append("g")
    .attr("transform", function(d, index)
    {
    return "translate(50," + index * 20 + ")";
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

dataPromise.then
(
    function(data)
    {
        console.log("baller code brohhh", data)
        setup(data)
    },
    
    function(err)
    {
        console.log("this code belong to the streets", err)
    }
)



var setup = function(array2D)
{
    d3.select("svg")
        .append("g")
        .attr("id", "practiceBar")
    
    var barGraph = d3.select("#practiceBar")
        .selectAll("g")
        .data(array2D)
        .enter()
    
    barGraph.append("rect")
        .attr("x", function(food, index)
        {
           return 10; 
        })
        .attr("y", function(food, index)
        {
            return index * 10;
        })
        .attr("width", function(food, index)
        {
            return food.beets
        })
        .attr("style", "fill:black")
}
*/
//d3.select("body *")
//    .remove()

var apiPromise = d3.json("fairyAPI.json")

apiPromise.then
(
    function(data)
    {
        var goodTable = d3.select("body")
            .append("table")
            .attr("id", "infoTable")
        
        var rows = goodTable.selectAll("tr")
            .data(data)
            .enter()
            .append("tr")
        
        
            rows.selectAll("td")
            .data(data)
            .enter()
            .append("td")
            .text(function(fairy)
                 {
            return fairy.name
        })
            .append("td")
            .text(function(fairy)
                 {
                return fairy.description
            })
            
    },
    function(err)
    {
        console.log('err', err)
    }
)
    