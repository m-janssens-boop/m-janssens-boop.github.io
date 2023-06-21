

//function buildMetadata(sample) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    // promise pending
    const dataPromise = d3.json(url);
    console.log("Data Promise: ", dataPromise);

    //fetch the JSON data and console log it
    d3.json(url).then(function(data){
    console.log(data);
    });
  
    // Filter the data for the object with the desired sample number (the id)
    function selectId(sampleId, idNumber){
        return metadata.id == idNumber;
    };
    
    let test = selectId(940);

    // Select the panel with id of `#sample-metadata`
      
  
    // Clear existing metadata - use `.html("")`
      
  
    // Append new tags for each key-value in the metadata
  
  
    // If you want to do the bonus, you can make the gauge chart here
  
//} 
    ;

  
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