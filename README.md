# angular-one-render-react-component
An angular one directive that renders a react component

Example usage:
```JS
import angular from "angular";
import SuggestedProductsController from 'SuggestedProductsController'

angular.module('checkout').directive(
    'checkoutSuggestedProducts', function () {
        function link(scope) {
                        scope.reactComponent = SuggestedProductsController;
                        scope.reactProps = {
                            'categoryName': 'Suggested Products',
                            'productCount': 5
                        };
                    }
                }
            );
        }

        return {
            link: link,
            restrict: 'E',
            scope: {
                order: '=order',
            },
            template: `
<render-react-component component="reactComponent" props="reactProps"></render-react-component>
        }
    }
);

```
