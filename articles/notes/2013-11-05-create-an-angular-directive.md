# Create an angular.js directive

> Best pratices: 
> - namespace the name of the directive


```js
var app = angular.module('MyApp');

// Load directive
app.directive('myDirective',createMyDirective);

// Factory to create myDirective direction
function createMyDirective(){
	var directive = {};
    
    return directive;
};
```