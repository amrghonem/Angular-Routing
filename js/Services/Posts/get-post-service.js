angular.module("main-app")
    .factory("getPostSrv",function($http){
        return {
            getPost : function(postId) {
                return $http({ method: "Get", url: "https://jsonplaceholder.typicode.com/posts/"+postId });
            }
        }
    })