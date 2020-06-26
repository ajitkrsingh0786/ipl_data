function extraRunsByEachTeamIn2016(matches,deliveries) {
     
    const result = {};
    
    for (let match of matches) {
      const season = match.season;
      if (season==='2016') {

          
          const id=match.id;
           
          for(let deliveri of deliveries){
              const match_id=deliveri.match_id;
              if(id===match_id){
                 
                 const team=deliveri.bowling_team;
                 const extra_runs=parseInt(deliveri.extra_runs,10);
                   
                  if(result[team]){
                    result[team]+=extra_runs;
                  }else{
                    result[team]=extra_runs;
                  }
                  

              }
          }
         
      }  
    }
     
    return result;
  }
  
  module.exports = extraRunsByEachTeamIn2016;