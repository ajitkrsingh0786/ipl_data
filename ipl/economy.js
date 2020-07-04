function economy(matches,deliveries){
    const result = {};
     

    for (let match of matches) {
        const season = match.season;
        if (result[season]) {
            const id=match.id;
           for(deliveri of deliveries){
            const match_id=deliveri.match_id;
            if(id===match_id){

               const bowler=deliveri.bowler;
        
          if(result[season][bowler]){
            result[season][bowler]["balls"]+=1;
            result[season][bowler]["total_runs"]+=parseInt(deliveri.total_runs);
            }else{
            result[season][bowler]={"balls":1,
              "total_runs":parseInt(deliveri.total_runs)
            }
         }
        }
    }
   }else{
       result[season]={};
       const id=match.id;
           for(deliveri of deliveries){
            const match_id=deliveri.match_id;
            if(id===match_id){

               const bowler=deliveri.bowler;
        
          if(result[season][bowler]){
            result[season][bowler]["balls"]+=1;
            result[season][bowler]["total_runs"]+=parseInt(deliveri.total_runs);
            }else{
            result[season][bowler]={"balls":1,
              "total_runs":parseInt(deliveri.total_runs)
            }
         }
        }
    }
   }
}
const result1={}
for(year in result){
    result1[year]={};
  for(bowler in result[year]){
      result1[year][bowler]= result[year][bowler]["total_runs"]/(result[year][bowler]["balls"]/6);

  }}

  var last_final_result = {};
  for(var year in result1 ){
      var final_result=[];
  for (var bowler in result1[year]) {
    final_result.push([bowler, result1[year][bowler]]);
}
final_result.sort(function(a, b) {
    return a[1] - b[1];
});

  var final_object={}
     for(let i=0;i<10;i++){
        final_object[final_result[i][0]]=final_result[i][1];
     }

     last_final_result[year]=final_object;


  }

    return last_final_result ;

}

module.exports = economy;