function economicalBowlers(matches,deliveries){
    const result = {};
     

    for (let match of matches) {
        const season = match.season;
        if (season==='2015') {
            const id=match.id;
           for(deliveri of deliveries){
            const match_id=deliveri.match_id;
            if(id===match_id){

               const bowler=deliveri.bowler;
        
          if(result[bowler]){
            result[bowler]["balls"]+=1;
            result[bowler]["total_runs"]+=parseInt(deliveri.total_runs);
            }else{
            result[bowler]={"balls":1,
              "total_runs":parseInt(deliveri.total_runs)
            }
         }
        }
    }
   }
}
  const result1={}

  for(bowler in result){
      result1[bowler]= result[bowler]["total_runs"]/(result[bowler]["balls"]/6);

  }

  var final_result = [];
for (var bowler in result1) {
    final_result.push([bowler, result1[bowler]]);
}
final_result.sort(function(a, b) {
    return a[1] - b[1];
});

  var final_object={}
     for(let i=0;i<10;i++){
        final_object[final_result[i][0]]=final_result[i][1];
     }
 



    return final_object ;

}

module.exports = economicalBowlers;