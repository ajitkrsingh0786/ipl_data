function numberOfMatchesWonByEachTeam(matches){
    result={};
    totalSeason={};
    for(match of matches){
        const winner=match.winner;
        const season = match.season;
         
        totalSeason[season]=match.season;
        

        if(result[winner]){
                if(result[winner][season]){
                    result[winner][season]+=1;
                }else{
                    result[winner][season]=1;
                }
        }else{
            result[winner]={
                 
            }

            result[winner][season]=1;
        }
    }

    return [result,totalSeason];
}


module.exports = numberOfMatchesWonByEachTeam;