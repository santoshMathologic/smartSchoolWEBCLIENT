'use strict'

angular.module('smartSchoolApp').directive('userPlan',function(){
    
    return{
          templateUrl :'scripts/directives/userPlan/userPlan.tmpl.html',
          restrict:'EA',
          replace:true,
          controller: function($scope,$http){
            
            console.log("Scope vales",$scope);
              
          },
          link :function(scope,element,attrs){
              
              
              
          }
        
        
    }
    
    
    
});



