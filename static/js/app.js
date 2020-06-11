  var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
  var data = [];
  var colorDict = {};
  var chart;


  function buildGraph(dict) {
    var options = {
      container: document.querySelector('#myChart'),
      data: dict.data,
      title: {
        text: 'Firearm Related Deaths',
        fontSize: 18,
      },
      subtitle: {
        text: 'Source: CDC.gov',
      },
      series: dict.series,
      legend: {
        position:'bottom'
      },
      axes: [
        {
          position: 'bottom',
          type: 'time',
          tick: {
            count: agCharts.time.month.every(12),
          },
        },
        {
          position: 'left',
          type: 'number',
          title: {
            text: 'Deaths',
          }, 
          tick: {
            count: 8,
          },
        },
      ],
    };
    
    chart = agCharts.AgChart.create(options);
  }

  function buildChartData(){
    var year_arr = getDateArray();
    var d = data.filter(obj => year_arr.includes(obj['YEAR']));

    //Deep Copy for data manipulation
    let chart_data = $.extend(true,[],d);
    
    Object.entries(chart_data).forEach(([key, value]) => {
      value['YEAR'] = new Date(value.YEAR, 0);
    });

    console.log(chart_data);
    return chart_data;
  }

  function buildGraphSeriesDict(st_arr) {
    var series_dict = [];

    st_arr.forEach(st => {
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      var series = {
        xKey: 'YEAR',
        yKey: `${st}`,
        visible: false,
        stroke: randomColor,
        marker: {
          stroke: randomColor,
          fill: randomColor,
        },
        tooltipRenderer: function(params) {
          var datum = params.datum;
          var xKey = params.xKey;
          var yKey = params.yKey;
          //var text = datum[xKey].getFullYear() + ': ' + datum[yKey];
          return `<div style="padding: 10px;">
                  <h5>${yKey}</h5>
                  <p>Year: ${datum[xKey].getFullYear()}</p>
                  <p>Deaths: ${datum[yKey]}</p>
                  </div>`;
        },
      };
      series_dict.push(series);
    });
    
    return {'series': series_dict, 'data': buildChartData()};
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  //////////////////////////////////////////////////////// Helper functions ////////////////////////////////////////////////////////

  //Grab Year Data for select list populating
  function getYears(data){
    var years = jQuery.map(data, function(d) {
      return d['YEAR'];
    });

    //Remove Duplicates and null elements
    years = years.filter(function(elem, pos) {
      return years.indexOf(elem) == pos && elem;
    });

    return years.filter(obj => obj);
  }

  //Building YEAR array for filtering 
  function getDateArray(){
    var start = d3.select('#startDate_sel').node().value;
    var end = d3.select('#endDate_sel').node().value;
    var arr = [],
        st = +start,
        end = +end;

    while (st <= end) {
      arr.push(st);
      st = st + 1;
    }
    return arr;
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////// SELECT LIST - SELECT BUTTONS JS ////////////////////////////////////////////////////////
  function buildSelectList(el, data, disabled_value, defaultOption){
    el.selectAll('option')
    .data(data)
    .enter().append('option')
    .attr('value', d => { return d; })
    .property("selected", d => { return d === defaultOption; })
    .property("disabled", d => { return d == disabled_value})
    .text(d => { return d; });
  }

  function updateYearSelectList(){
    var start = d3.select('#startDate_sel');
    var end = d3.select('#endDate_sel');
    start.selectAll('option')
    .property("disabled", d => { return end.node().value <= d});
    end.selectAll('option')
    .property("disabled", d => { return start.node().value >= d});

    if(chart){
      chart.data = buildChartData();
    } else {
      Chart();
    }
  }

  function selectAll(){
    if(!chart) return false;

    chart.series.forEach(obj => {obj.visible = true});
  }

  function clearSelect(){
    if(!chart) return false;

    chart.series.forEach(obj => {obj.visible = false});
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////// ONLOAD ////////////////////////////////////////////////////////
  function Chart(){
    var dict = buildGraphSeriesDict(states);
    if(chart) chart.destroy();
    buildGraph(dict);
  }

  (async function(){
    //set a global value to hold data for use.
    data = await d3.json("/api/data");

    var years = getYears(data);
    var startDate = years[0];
    var endDate = years[years.length - 1];
    buildSelectList(d3.select('#startDate_sel'), years, endDate, startDate);
    buildSelectList(d3.select('#endDate_sel'), years, startDate, endDate);
    Chart();
  })()