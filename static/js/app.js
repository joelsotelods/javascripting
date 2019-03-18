
// from data.js
var ufo_data = data;


/// init the page... show all

fill_the_table(ufo_data);

get_filter_values(ufo_data);

var clear_filter = d3.select("#clear-btn");

var date_filter = d3.select("#datetime_x");




date_filter.on("change", function() {
    d3.event.preventDefault();
    console.log("hola")

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime_x");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {
        console.log("ja");

        fill_the_table(ufo_data);

    } else {
        // Create a custom filtering function
        function selectUFO(ufo_sight) {
            return ufo_sight.datetime == inputValue;
        }

        // filter() uses the custom function as its argument
        var selected_ufo_data = ufo_data.filter(selectUFO);

        // Test
        console.log(selected_ufo_data);

        fill_the_table(selected_ufo_data);
    }


});

clear_filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    fill_the_table(ufo_data);

});


 

function fill_the_table(data_to_show){


    var tbody = d3.select("tbody");

    tbody.html("");

    // Iterate through each student/grade pair
    data_to_show.forEach(({datetime, city, state , country, shape, durationMinutes, comments}) => {

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

};

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function get_filter_values(data_to_show){

    // Declare the arrays for the filters
    var dates = new Array();
    dates.push("All Data");

    var countries = new Array();
    var states = new Array();
    var cities = new Array();
    var shapes = new Array();


    // Iterate through each student/grade pair
    data_to_show.forEach(({datetime, city, state , country, shape, durationMinutes, comments}) => {

        // add the results for each array
        dates.push(datetime);
        
        countries.push(country);
        states.push(state);
        cities.push(city);
        shapes.push(shape);


    });


    // Create unique array values for each filter

    var dates_u = dates.filter(onlyUnique);
    console.log(dates_u);
    
    var country_u = countries.filter( onlyUnique ); 
    console.log(country_u);
    

    var state_u = states.filter( onlyUnique ); 
    console.log(state_u);

    var cities_u = cities.filter( onlyUnique ); 
    console.log(cities_u);
   

    var shape_u = shapes.filter( onlyUnique ); 
    console.log(shape_u);



    function myFunction(value, index, array) {

        var optionx = selector.append("option");
        optionx.text(value);
    }

    // Append filter array to selector..

    var selector = d3.select("#datetime_x");

    selector.html("");

    dates_u.forEach(myFunction);



    var selector = d3.select("#sel1");

    selector.html("");

    country_u.forEach(myFunction);

  
    var selector = d3.select("#sel2");

    selector.html("");
    state_u.forEach(myFunction);

    var selector = d3.select("#sel3");

    selector.html("");
    cities_u.forEach(myFunction);

    var selector = d3.select("#sel4");

    selector.html("");
    shape_u.forEach(myFunction);


    

};







// // Create a new element
// var li1 = d3.select("select").append("option");
// li1.text("sup");


