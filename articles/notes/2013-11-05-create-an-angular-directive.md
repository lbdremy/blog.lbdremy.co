# Create an angular.js directive

> Best pratices: 
> - namespace the name of the directive
> - use an element (`restrict : 'E'`) for the directive if the directive creates a component otherwise prefer an attribute (`restrict : 'A'`).
> - clean-up on the $destroy event, see element.on('$destroy',...) or scope.$on('$destroy',...)
> - only use the `transclude : true` when you want to create a directive wraping arbitraty content

A working example is available at this [page](http://plnkr.co/edit/ttrtT7FYUcb6UuV7DYz1?p=preview).

**index.html:**

```html
<!doctype html>
<html ng-app="MyApp">
  <head>
    <script src="http://code.angularjs.org/1.2.0-rc.3/angular.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    	<section ng-controller="MainCtrl">
        	<div my-directive="hi"></div>
        </section>
    </body>
</html>
```

**script.js:**

```javascript
var app = angular.module('MyApp',[]);

// Load controller
app.controller('MainCtrl',mainController);

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
        	propertyName : '=attributeName', // e.g: Set the scope of the directive with the property 'propertyName' having as value the value of the attribute with the name  'attribute-name' (noticed the change between CamelCase and Dash-LowerCase)
            hi : "=myDirective"
        },
        transclude : false, // if true the scope used by the directive is the scope outside the directive, typically the scope of the controller.
        template: '{{hi}}',
    };
    
    return directive;
};
```

Resources:

 - [Angular.js official documentation about directives](http://docs.angularjs.org/guide/directive)