// angular.module("peliculas", [])

// // En scope se almacenan todas las variables

angular.module("peliculas", ['ngResource'])

.factory("Post",function($resource){
  return $resource("https://api.themoviedb.org/3/discover/movie?api_key=9e580643e17b5787d80db9500a3b9260",{},{
    query:{method: "GET", isArray:false}
  })
})
.controller("SecondController",function($scope,$http){

$scope.arreglo=[];
$scope.c=1;
$scope.to=500;

 $scope.ver=function()
 {
   
   $scope.c=1;
   $scope.to=500;
   console.log($scope.nombre);
   $scope.arreglo.push({post:$scope.nombre});
   $scope.nombre="";

 }
 $scope.contar=function()
 {
   $scope.to=$scope.to-$scope.c;
 }

})

.controller("FirstController",function($scope,Post){
  Post.query(function(data)
  {
    $scope.movies=data.results;
    console.log($scope.movies)
  })

});

// .controller("SecondController",function($scope,Post){
//   $scope.arreglo=[];
//   $scope.c=0;
//  $scope.to=0;
//
//  $scope.ver=function()
//  {
//    $scope.c++
//    $scope.to=500-$scope.c;
//
//    console.log($scope.nombre);
//    $scope.arreglo.push({post:$scope.nombre})
//  }
