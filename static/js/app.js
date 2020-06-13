  var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
  var data = [];
  var colorDict = {};
  var chart;


  function buildGraph(options) {
    chart = agCharts.AgChart.create(options);
  }

  function buildChartData(xKey){
    if(xKey == "YEAR"){
      var year_arr = getDateArray();
      var d = data.filter(obj => year_arr.includes(obj['YEAR']));
  
      //Deep Copy for data manipulation
      let chart_data = $.extend(true,[],d);
      
      Object.entries(chart_data).forEach(([key, value]) => {
        value['YEAR'] = new Date(value.YEAR, 0);
      });

      return chart_data;
    }
    return;
  }

  function buildGraphSeriesDict(xKey, ykey) {
    var yKeys = Object.keys(data[0]).filter(k => k != xKey)
    var series_dict = [];
    yKeys.forEach(st => {
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      var series = {
        xKey: xKey,
        yKey: `${st}`,
        visible: true,
        stroke: randomColor,
        marker: {
          stroke: randomColor,
          fill: randomColor,
        },
        tooltipRenderer: function(params) {
          var datum = params.datum;
          var xKey = params.xKey;
          var yKey = params.yKey;
          return `<div style="padding: 10px;">
                  <h6>${yKey}</h6>
                  <p class="m-0">Year: ${datum[xKey].getFullYear()}</p>
                  <p class="m-0">Value: ${datum[yKey]}</p>
                  </div>`;
        },
      };
      series_dict.push(series);
    });
    
    return series_dict;
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function build_hfr_chart(options){
    data = await d3.json("/api/data/hfr");
    yearSelectListInit();
    var xKey = "YEAR";
    options.series = buildGraphSeriesDict(xKey);;
    options.data = buildChartData(xKey);
    if(chart) chart.destroy();
    buildGraph(options);
  }

  async function build_deaths_chart(options){
    data = await d3.json("/api/data/deaths");
    yearSelectListInit();
    var xKey = "YEAR";
    options.series = buildGraphSeriesDict(xKey);;
    options.data = buildChartData(xKey);

    if(chart) chart.destroy();
    buildGraph(options);
  }

  async function build_deaths_by_cause_chart(options){
    data = await d3.json("/api/data/death_cause");
    yearSelectListInit();
    var xKey = "YEAR";
    options.series = buildGraphSeriesDict(xKey, null);;
    options.data = buildChartData(xKey);

    if(chart) chart.destroy();
    buildGraph(options);
  }

  async function build_gender_suicide_rate_chart(options){
    data = await d3.json("/api/data/suicide_gender");
    yearSelectListInit();
    var xKey = "YEAR";
    options.series = buildGraphSeriesDict(xKey, null);
    options.data = buildChartData(xKey);

    if(chart) chart.destroy();
    buildGraph(options);
  }

  function ChartSelectionChanged(el){
    var options = get_chart_options(el);
    switch(el) {
      case "hfrvsy":
        build_hfr_chart(options);
        break;
      case "dvsy":
        build_deaths_chart(options);
        break;
      case "codvsy":
        build_deaths_by_cause_chart(options);
        break;
      case "gensvsy":
        build_gender_suicide_rate_chart(options);
        break;
      default:
        return;
    }
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
      chart.data = buildChartData('YEAR');
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

  function yearSelectListInit(){
    var years = getYears(data);
    var startDate = years[0];
    var endDate = years[years.length - 1];
    buildSelectList(d3.select('#startDate_sel'), years, endDate, startDate);
    buildSelectList(d3.select('#endDate_sel'), years, startDate, endDate);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////// ONLOAD ////////////////////////////////////////////////////////
  (function(){
    //set a global value to hold data for use.
    ChartSelectionChanged(d3.select('#chart_sel').node().value);
  })()