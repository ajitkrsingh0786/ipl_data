function matchesWonByEachTeamPerVenu(matches){
    
    result={};
    all_venue={};
 for(let match of matches){
     const winner=match.winner;
      const venue=match.venue;

          all_venue[venue]=venue;


       if(result[winner]){
                if(result[winner][venue]){
                    result[winner][venue]+=1;
                }else{
                    result[winner][venue]=1;
                }    
       }else{
            result[winner]={};
            result[winner][venue]=1;
       }
 }

 return [result,all_venue];

}
module.exports = matchesWonByEachTeamPerVenu;