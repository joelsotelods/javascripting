
// from data.js
var ufo_data = data;

/// init the page... show all

fill_the_table(ufo_data);

get_filter_values(ufo_data);

var clear_filter = d3.select("#clear-btn");

var date_filter = d3.select("#date_sel");
var country_filter = d3.select("#country_sel");
var state_filter = d3.select("#state_sel");
var city_filter = d3.select("#city_sel");
var shape_filter = d3.select("#shape_sel");

var current_working_data = ufo_data;


date_filter.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#date_sel");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {

        fill_the_table(ufo_data);
        get_filter_values(ufo_data);

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
        //get_filter_values(selected_ufo_data);
    }

});


country_filter.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#country_sel");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {

        fill_the_table(ufo_data);
        get_filter_values(ufo_data);

    } else {
        // Create a custom filtering function
        function selectUFO(ufo_sight) {
            return ufo_sight.country == inputValue;
        }

        // filter() uses the custom function as its argument
        var selected_ufo_data = ufo_data.filter(selectUFO);

        // Test
        console.log(selected_ufo_data);

        fill_the_table(selected_ufo_data);
        //get_filter_values(selected_ufo_data);
    }

});

state_filter.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state_sel");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {

        fill_the_table(ufo_data);
        get_filter_values(ufo_data);

    } else {
        // Create a custom filtering function
        function selectUFO(ufo_sight) {
            return ufo_sight.state == inputValue;
        }

        // filter() uses the custom function as its argument
        var selected_ufo_data = ufo_data.filter(selectUFO);

        // Test
        console.log(selected_ufo_data);

        fill_the_table(selected_ufo_data);
        //get_filter_values(selected_ufo_data);
    }

});

city_filter.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city_sel");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {

        fill_the_table(ufo_data);
        get_filter_values(ufo_data);

    } else {
        // Create a custom filtering function
        function selectUFO(ufo_sight) {
            return ufo_sight.city == inputValue;
        }

        // filter() uses the custom function as its argument
        var selected_ufo_data = ufo_data.filter(selectUFO);

        // Test
        console.log(selected_ufo_data);

        fill_the_table(selected_ufo_data);
        //get_filter_values(selected_ufo_data);
    }

});

shape_filter.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape_sel");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    if (inputValue == "All Data") {

        fill_the_table(ufo_data);
        get_filter_values(ufo_data);

    } else {
        // Create a custom filtering function
        function selectUFO(ufo_sight) {
            return ufo_sight.shape == inputValue;
        }

        // filter() uses the custom function as its argument
        var selected_ufo_data = ufo_data.filter(selectUFO);

        // Test
        console.log(selected_ufo_data);

        fill_the_table(selected_ufo_data);
        //get_filter_values(selected_ufo_data);
    }

});

clear_filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    fill_the_table(ufo_data);
    get_filter_values(ufo_data);

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
};



function get_filter_values(data_to_show){

    // Declare the arrays for the filters
    var dates = new Array();
    dates.push("All Data");

    var countries = new Array();
    countries.push("All Data");

    var states = new Array();
    states.push("All Data");

    var cities = new Array();
    cities.push("All Data");
    
    var shapes = new Array();
    shapes.push("All Data");

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

    var selector = d3.select("#date_sel");

    selector.html("");

    dates_u.forEach(myFunction);



    var selector = d3.select("#country_sel");

    selector.html("");

    country_u.forEach(myFunction);

  
    var selector = d3.select("#state_sel");

    selector.html("");
    state_u.forEach(myFunction);

    var selector = d3.select("#city_sel");

    selector.html("");
    cities_u.forEach(myFunction);

    var selector = d3.select("#shape_sel");

    selector.html("");
    shape_u.forEach(myFunction);


};







// // Create a new element
// var li1 = d3.select("select").append("option");
// li1.text("sup");


