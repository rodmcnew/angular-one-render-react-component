# Angular One Render React Component
An angular one directive that renders a react component

Example usage:
```JS
import angular from "angular";
import SuggestedProductsController from 'SuggestedProductsController'

angular.module('checkout', ['angularOneRenderReactComponent']).directive(
    'checkoutSuggestedProducts', function () {
        function link(scope) {
            scope.myReactComponent = SuggestedProductsController;
            scope.myReactProps = {
                'categoryName': 'Suggested Products',
                'productCount': 5
            };
        }

        return {
            link: link,
            template: `
<render-react-component component="myReactComponent" props="myReactProps"></render-react-component>
        }
    }
);

```
