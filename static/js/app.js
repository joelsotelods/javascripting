// from data.js

//var imported = document.createElement('script');
//imported.src = '/path/to/imported/script';
//document.head.appendChild(imported);

var tableData = data;

console.log(tableData[0]);

var tbody = d3.select("tbody");


// Iterate through each student/grade pair
tableData.forEach(({datetime, city, state , country, shape, durationMinutes, comments}) => {

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


// YOUR CODE HERE!
