  function buildGraph(data) {
    var test = data.filter(d => d['STATE'] == 'AL');
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    var options = {
      container: document.querySelector('#myChart'),
      data: test,
      title: {
        text: 'Firearm Related Deaths',
        fontSize: 18,
      },
      subtitle: {
        text: 'Source: CDC.gov',
      },
      series: [
        {
          type: 'line',
          xKey: 'YEAR',
          yKey: 'RATE',
          labelKey: 'STATE',
          stroke: randomColor,
          marker: {
            stroke: randomColor,
            fill: randomColor,
          },
        },
        {
          type: 'line',
          xKey: 'YEAR',
          yKey: 'DEATHS',
          labelKey: 'STATE',
          stroke: '#000000',
          marker: {
            stroke: '#000000',
            fill: '#000000',
          },
        },
      ],
      legend: {
        position:'bottom'
      },
      axes: [
        {
          position: 'bottom',
          type: 'number',
          title: {
            text: 'Year',
          },
        },
        {
          position: 'left',
          type: 'number',
          title: {
            text: 'Death Rate (per 100,000)',
          },
        },
      ],
    };
    
    var chart = agCharts.AgChart.create(options);
  }
  //////////////////////////////////////////////////////// SELECT LIST JS ////////////////////////////////////////////////////////
  //Grab Year Data for select list populating
  function getYears(data){
    var years = jQuery.map(data, function(d) {
      return d['YEAR'];
    });
    // var years = Object.keys(data.YEAR).map(function (key) {
    //   return data.YEAR[key];
    // });

    //Remove Duplicates and null elements
    years = years.filter(function(elem, pos) {
      return years.indexOf(elem) == pos && elem;
    });

    return years.filter(obj => obj);
  }

  function buildSelectList(el, data, defaultOption){
    el.selectAll('option')
    .data(data)
    .enter().append('option')
    .attr('value', d => { return d; })
    .property("selected", d => { return d === defaultOption; })
    .text(d => { return d; });
  }

  function updateYearSelectList(el){
    var start = d3.select('#startDate_sel');
    var end = d3.select('#endDate_sel');

    start.selectAll('option')
    .property("disabled", d => { return end.node().value <= d});
    end.selectAll('option')
    .property("disabled", d => { return start.node().value >= d});
  }
//////////////////////////////////////////////////////// SELECT LIST JS ////////////////////////////////////////////////////////


  (async function(){
    var data = await d3.json("/api/data");
    var years = getYears(data)
    var startDate = d3.select('#startDate_sel');
    var endDate = d3.select('#endDate_sel');
    buildSelectList(startDate, years, years[years.length - 1])
    buildSelectList(endDate, years, years[0])
    buildGraph(data);
  })()