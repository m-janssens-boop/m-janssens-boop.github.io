function buildMetadata(sample) {
    // Access the website and use d3 to operate on the data
  
  
      // Filter the data for the object with the desired sample number (the id)
  
  
      // Select the panel with id of `#sample-metadata`
      
  
      // Clear existing metadata - use `.html("")`
      
  
      // Append new tags for each key-value in the metadata
  
  
      // If you want to do the bonus, you can make the gauge chart here
  
  
    ;
  }
  
  function buildCharts(sample) {
    // Access the website and use .then to operate on the data
  
  
      // Filter the data for the object with the desired sample number (the id)
  
  
      // Pull the desired information (ids, labels, values) from your filtered data
  
  
      // Build a Bubble Chart
      
  
      // Slice the data for your bar chart and order it (you can just use reverse)
  
  
      // Build a Horizontal Bar Chart
  
  
    ;
  }
  
  function init() {
    // Get the reference to the dropdown menu
  
  
    // Use the list of sample names to populate the select options
    // Do this by pulling the array associated with `names` 
      
  
      // Loop through the names and append to the dropdown menu
  
  
      // Use the first sample from the list to build the initial plots
      
  
    ;
  }
  
  function optionChanged(newSample) {
    // Change your data and update your plots/metadata when newSample is selected from the dropdown
  
  
  }
  
  // Initialize the dashboard
  init();










  //Convert metadata to an array
const Data = d3.json(url).then(function(data){
    return Object.keys(data)
});

let bellyData = Object.keys(Data)

console.log(typeof Data)
//console.log(bellyData)
//create drop down menu of all ids to select from

//let ids = bellyData.map(function(nameId){
//    return nameId.id
//});

//console.log("ids: ", ids)

//create a function that selects ids from the JSON file

//use .filter method to pull id out and then use that id to find all other information for that subject

//initialize a horizontal bar plot

//initialize a bubble chart

//initialize the demographic info box
