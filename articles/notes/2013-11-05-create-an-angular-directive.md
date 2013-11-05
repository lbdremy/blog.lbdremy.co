# Create an angular.js directive

> Best pratices: 
> - namespace the name of the directive
> - use an element (`restrict : 'E'`) for the directive if the directive creates a component otherwise prefer an attribute (`restrict : 'A'`).
> - clean-up on the $destroy event, see element.on('$destroy',...) or scope.$on('$destroy',...)
> - only use the `transclude : true` when you want to create a directive wraping arbitraty content


```html
<html>
	<head>...</head>
    <body ng-app="MyApp">
    	<section ng-controller="MainCntl">
        	<div my-directive="hi"></div>
        </section>
    </body>
</html>
```

```js
var app = angular.module('MyApp');

// Load controller
app.controller('MainCntl',mainController);

function mainController($scope){
 $scope.hi = 'Hello';
}

// Load directive
app.directive('myDirective',createMyDirective);

// Factory to create myDirective direction
function createMyDirective(){
	var directive = {
    	restrict : 'A', // matches only attribute name (default), 'E' for only element name and 'EA' for both.
        scope : { // define the properties and the associated values of the inner scope of the directive
        	propertyName : '=attributeName' // e.g: Set the scope of the directive with the property 'propertyName' having as value the value of the attribute with the name  'attribute-name' (noticed the change between CamelCase and Dash-LowerCase)
        },
        transclude : false, // if true the scope used by the directive is the scope outside the directive, typically the scope of the controller.
    };
    
    return directive;
};
```

Resources:

 - [Angular.js official documentation about directives](http://docs.angularjs.org/guide/directive)