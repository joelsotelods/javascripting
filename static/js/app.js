
// from data.js
var ufo_data = data;


var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Create a custom filtering function
    function selectUFO(ufo_sight) {
        return ufo_sight.datetime == inputValue;
    }

    // filter() uses the custom function as its argument
    var selected_ufo_data = ufo_data.filter(selectUFO);

    // Test
    console.log(selected_ufo_data);

    var tbody = d3.select("tbody");

    tbody.html("");

    // Iterate through each student/grade pair
    selected_ufo_data.forEach(({datetime, city, state , country, shape, durationMinutes, comments}) => {

    // Append one table row per student/grade
    var row = tbody.append("tr");

    // append one cell for the student and one cell for the grade
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
    });

});



