 
function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);

      fetch("./data1.json")
      .then(r => r.json())
      .then(visualizeData1);

      fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData2);

      fetch("./data3.json")
      .then(r => r.json())
      .then(visualizeData3);
  }

   
  fetchAndVisualizeData();
   
   
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeExtraRunsByEachTeamIn2016(data.extraRunsByEachTeamIn2016);
    return;
  }

  function visualizeData2(data) {
    visualizeNumberOfMatchesWonByEachTeam(data.numberOfMatchesWonByEachTeam,data.totalSeason);
     
    return;
  }

  function visualizeData1(data) {
    visualizeEconomicalBowlersOf2015(data.economicalBowlersOf2015);
     
    return;
  }

  function visualizeData3(data) {
    visualizeMatchesWonByEachTeamPerVenu(data.matchesWonByEachTeamPerVenu,data.all_venue);
     
    return;
  }



  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "1.Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
 
function  visualizeNumberOfMatchesWonByEachTeam(numberOfMatchesWonByEachTeam,totalSeason){
  //console.log(totalSeason); 
  //console.log(numberOfMatchesWonByEachTeam);
  const categoriesData=[];
  const seriesData=[];

  for(let season in totalSeason){
   categoriesData.push(season);
  }
   

  for(let team in numberOfMatchesWonByEachTeam){
          const  subSeriesData={};
          const   data1=[];
        


        for(let i=0;i<categoriesData.length;i++){
              const a=categoriesData[i];
              if(numberOfMatchesWonByEachTeam[team].hasOwnProperty(a)){
                data1.push(numberOfMatchesWonByEachTeam[team][a]);
              }else{
               data1.push(0);
              }
        }
        subSeriesData.name=team;
        subSeriesData.data=data1;
        seriesData.push(subSeriesData);
    
  }
//console.log(seriesData);


  Highcharts.chart("number-of-matches-won-by-each-team-over-all-the-years-of-ipl", {
    chart: {
        type: 'column'
    },
    title: {
        text: '2.Number of matches won by each team over all the years of ipl'
    },
    subtitle: {
        text: 'Number of matches won by each team'
    },
    xAxis: {
        categories:categoriesData,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'number of matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
  });
    
  }



  function visualizeExtraRunsByEachTeamIn2016(extraRunsByEachTeamIn2016){
    const seriesData = [];
    for (let runs in extraRunsByEachTeamIn2016) {
      seriesData.push([runs, extraRunsByEachTeamIn2016[runs]]);
    }
  
    Highcharts.chart("matches-played-per-year1", {
      chart: {
        type: "column"
      },
      title: {
        text: "3.Extra runs conceded by each team in 2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Runs"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData
        }
      ]
    });
  }

  function visualizeEconomicalBowlersOf2015(economicalBowlersOf2015){
    const seriesData = [];
    for (let economic in economicalBowlersOf2015) {
      seriesData.push([economic, economicalBowlersOf2015[economic]]);
    }
  
    Highcharts.chart("matches-played-per-year2", {
      chart: {
        type: "column"
      },
      title: {
        text: "4. Top 10 economical bowlers in 2015 season"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "economy"
        }
      },
      series: [
        {
          name: "Player",
          data: seriesData
        }
      ]
    });
  }


 function visualizeMatchesWonByEachTeamPerVenu(matchesWonByEachTeamPerVenu,all_venue){
    
     //console.log(all_venue);
    // console.log(matchesWonByEachTeamPerVenu);

    let venues=[];
    for(let a in all_venue ){
        venues.push(a);
    }
    //console.log(venues);

   const series=[];
 
      for(let team in matchesWonByEachTeamPerVenu){
          let data=[];
          let name=team;
          //console.log(22);
          for(let i=0;i<venues.length;i++){
            //console.log(venues[i]);
            //console.log(matchesWonByEachTeamPerVenu[team][venues[i]])
            if(matchesWonByEachTeamPerVenu[team][venues[i]]){
              data.push(matchesWonByEachTeamPerVenu[team][venues[i]]);
            }
          else{
            data.push(0);
          }
        }

          series.push({
            name:name,
            data:data
          });
      }

      // console.log(series);

  Highcharts.chart('matches-won-by-each-team-per-venue', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5.Matches won by each team per venu'
    },
    xAxis: {
        categories: venues
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won vs stadium'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: series
});

 }
   
   
 
   