function get_chart_options(chart){
  switch(chart) {
    case "hfrvsy":
      return HFR_Vs_Year_Options();
      break;
    case "dvsy":
      return Deaths_Vs_Year_Options();
      break;
    case "codvsy":
      return Deaths_By_Cause_Vs_Year_Options();
      break;
    case "gensvsy":
      return Suicide_Gender_Options();
      break;
    default:
      return;
  }
}

var subtitle = 'Source: CDC.gov, rand.org'
function HFR_Vs_Year_Options(){
  var options = {
    container: document.querySelector('#myChart'),
    title: {
      text: 'HFR Vs. Year',
      fontSize: 18,
    },
    subtitle: {
      text: subtitle,
    },
    series: [],
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
          text: 'HFR',
        }, 
        tick: {
          count: 8,
        },
      },
    ],
  };
  return options;
}

function Deaths_Vs_Year_Options(){
  var options = {
    container: document.querySelector('#myChart'),
    title: {
      text: 'Firearm Related Deaths By State',
      fontSize: 18,
    },
    subtitle: {
      text: subtitle,
    },
    series: [],
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
  return options;
}

function Deaths_By_Cause_Vs_Year_Options(){
  var options = {
    container: document.querySelector('#myChart'),
    title: {
      text: 'Firearm Related Deaths By Cause',
      fontSize: 18,
    },
    subtitle: {
      text: subtitle,
    },
    series: [],
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
  return options;
}

function Suicide_Gender_Options(){
  var options = {
    container: document.querySelector('#myChart'),
    title: {
      text: 'Gender Suicide Rates By Year',
      fontSize: 18,
    },
    subtitle: {
      text: subtitle,
    },
    series: [],
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
          text: 'Suicide Rate',
        }
      },
    ],
  };
  return options;
}