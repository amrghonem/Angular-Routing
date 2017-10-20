
 angular.module("main-app")
         .factory("postsService",function($http){
             return {
                 getPosts : function(){
                     return $http({ method: "Get", url: "https://jsonplaceholder.typicode.com/posts" });
                }
             }
         })