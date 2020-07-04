const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require('./ipl/matchesPlayedPerYear');
const extraRunsByEachTeamIn2016 = require('./ipl/extraRunsByEachTeamIn2016');
const economicalBowlers = require('./ipl/economicalBowlers');
const numberOfMatchesWonByEachTeam = require('./ipl/numberOfMatchesWonByEachTeam');
const matchesWonByEachTeamPerVenu=require('./ipl/matchesWonByEachTeamPerVenu');
const economy=require('./ipl/economy');




const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH1 = "./public/data1.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json";
 
function main(){
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
          
        let result = matchesPlayedPerYear(matches);
        saveMatchesPlayedPerYear(result);
    });

    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
          
        let result = numberOfMatchesWonByEachTeam(matches);
        //console.log(result);
       // console.log("ajit");
        saveNumberOfMatchesWonByEachTeam(result);
    });


    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
           // console.log(matches.slice(0,1));
            //console.log(deliveries.slice(0,2));
          let result = extraRunsByEachTeamIn2016(matches,deliveries);
           //console.log(result);
          saveExtraRunsByEachTeamIn2016(result);
      });  
        
    });


    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
            
          let result = economicalBowlers(matches,deliveries);
           //console.log(result);
          saveEconomicalBowlersOf2015(result);
      });  

    });

    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
        //  console.log(matches);
        let result = matchesWonByEachTeamPerVenu(matches);
        //console.log(result);
        saveMatchesWonByEachTeamPerVenu(result);
    });

    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
            
          let result = economy(matches,deliveries);
           console.log(result);
          saveEconomy(result);
      });  
      });  

}

function saveMatchesPlayedPerYear(result) {
   
    const jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }


  function saveNumberOfMatchesWonByEachTeam(result) {
      
    const jsonData = {
      numberOfMatchesWonByEachTeam: result[0],
      totalSeason:result[1]
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }


  function saveExtraRunsByEachTeamIn2016(result) {
     
     
    let pre_data= JSON.parse(fs.readFileSync(JSON_OUTPUT_FILE_PATH, "utf8")); 
     
     pre_data["extraRunsByEachTeamIn2016"]=result;
      
       const jsonString1 = JSON.stringify(pre_data);  
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString1,"utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

  
  function saveEconomicalBowlersOf2015(result) {
    const jsonData = {
      economicalBowlersOf2015: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }



  function saveMatchesWonByEachTeamPerVenu(result){
    const jsonData = {
      matchesWonByEachTeamPerVenu: result[0],
      all_venue:result[1]
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });

  }


  function saveEconomy(result) {
    const jsonData = {
      economy: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();