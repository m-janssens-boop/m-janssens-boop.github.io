

function buildMetadata(sample) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    //fetch the JSON data and console log it
   d3.json(url).then((data) => {
    console.log(data);

    // Filter the data for the object with the desired sample number (the id)
    let metadata = data.metadata;
    let filteredArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = filteredArray[0];
    // Select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");
  
    // Clear existing metadata - use `.html("")`
    panel.html("");
  
    // Append new tags for each key-value in the metadata
    for (key in result){
      panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };
    });
};
  function buildCharts(sample) {
    // Access the website and use .then to operate on the data
        // read in url
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      // Filter the data for the object with the desired sample number (the id)
      let samples = data.samples;
      let filteredSamplesArray = samples.filter(sampleObj => sampleObj.id == sample);
      let result = filteredSamplesArray[0]
      // Pull the desired information (ids, labels, values) from your filtered data
      let id = result.id;
      let labels = result.otu_ids;
      let values = result.sample_values;
      // Build a Bubble Chart
      let bubbleTrace = {
       x: labels,
       y: values,
       mode: 'markers',
       marker: {
       color: labels,
       size: values
        }
      };
      let bubbleLayout = {
      title: "Prevalence of OTUs",
      xaxis: {
        title: {
          text: "OTU ID"
        }
      }
      };
      let bubbleData = [bubbleTrace]
      Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  
      // Slice the data for your bar chart and order it (you can just use reverse)
      let slicedData = filteredSamplesArray.slice(0, 10);
      let reversedData = slicedData.reverse();
  
      // Build a Horizontal Bar Chart
      let barTrace = {
        x: reversedData.otu_ids
       ,y: reversedData.sample_values
       ,text: reversedData.otu_labels
       ,type: "bar"
       ,orientation: "h"
      };

      let traceData = [barTrace];
      Plotly.newPlot("bar", traceData);
    });
    
  };
  
  function init() {
    // Get the reference to the dropdown menu
    let selector = d3.select("#selDataset")
  
    // Use the list of sample names to populate the select options
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
    // Do this by pulling the array associated with `names` 
      let idNames = data.names;
      
      // Loop through the names and append to the dropdown menu
      for (let i = 0; i < idNames.length; i++){
        selector.append("option").text(idNames[i]).property("value",idNames[i]);
      };
  
      // Use the first sample from the list to build the initial plots
      let firstSample = idNames[0]
      buildCharts(firstSample)
      buildMetadata(firstSample)
    })
    ;
  }
  
  function optionChanged(newSample) {
    // Change your data and update your plots/metadata when newSample is selected from the dropdown
    buildCharts(newSample);
    buildMetadata(newSample);
  
  };
  
  // Initialize the dashboard
  init();