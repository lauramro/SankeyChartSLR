function initialize() {
    var opts = {sendMethod: 'auto'};
    // Replace the data source URL on next line with your data source URL.
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1xWE7YeWgD4KbwuTvCiOhtYe4gm_o2Zlu2B_n0jrOqMs/gviz/tq?range=A1:C24', opts);
  
    // Send the query with a callback function.
    query.send(handleQueryResponse);
  }
  
  function handleQueryResponse(response) {
    // Called when the query response is returned.
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
  
    var data = response.getDataTable();
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, {width: 700, height: 400, is3D: true});
  }
  
  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(initialize);
  
  