# Angular One Render React Component
An angular one directive that renders a react component

Example usage:
```JS
import 'angular-one-render-react-component'; //Ideally import this module only once

import angular from "angular";
import SuggestedProductsController from 'SuggestedProductsController'

angular.module('checkout', ['angularOneRenderReactComponent']).directive(
    'checkoutSuggestedProducts', function () {
        function link(scope) {
            scope.myReactComponent = SuggestedProductsController;
            scope.myReactProps = {
                categoryName: 'Suggested Products',
                productCount: 5
            };
        }

        return {
            link: link,
            template: '<render-react-component component="myReactComponent" props="myReactProps"/>'
        }
    }
);

```

# License
ISC License (ISC)
Copyright 2018 Rod Mcnew

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
