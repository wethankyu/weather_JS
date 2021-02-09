
const chartDiv = document.getElementById('chart_div')

var data = {};

google.charts.load('current', { 'packages': ['gantt'] });
google.charts.setOnLoadCallback(drawChart);

function showToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDos) {
      var strArray = toDos.date.split('/');
      var strArray2 = toDate.split('/');
      data.addRows([
        [toDos.text, toDos.text, toDos.text, new Date(strArray[0], strArray[1] - 1, strArray[2]), new Date(strArray2[0], strArray2[1] - 1, strArray2[2]), null, null, null]
      ]);
    });
  }
}

function drawChart() {

  data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  // data.addRows([
  //   ['Hockey', 'Hockey Season', 'sports',
  //     new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]]);

  showToDos();

  var options = {
    height: 400,
    gantt: {
      trackHeight: 30
    }
  };

  var chart = new google.visualization.Gantt(chartDiv);

  chart.draw(data, options);
  // window.location.reload();
  // chartDiv.innerHTML = chartDiv.innerHTML;
  // $("#chart_div").load(" #chard_div > *");
  // chartDiv.innerHTML = "";

}