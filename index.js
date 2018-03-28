import angular from "angular";
import ReactDom from 'react-dom';
import React from 'react';

let lastUniqueIdNumber = 0;

/**
 * Generate a unique ID for the dom.
 *
 * We could just use math.random() here but there is a few in a billion change that could break.
 */
function generateUniqueId() {
    lastUniqueIdNumber++;
    return 'angularOneRenderReactComponentContainer-' + lastUniqueIdNumber;
}

/**
 * This is an angular one directive that renders the given react component with the given props.
 *
 * Example usage where reactComponent is an imported class and reactProps is an object:
 * <render-react-component component="reactComponent" props="reactProps"></render-react-component>
 */
angular.module('angularOneRenderReactComponent', []).directive(
    'renderReactComponent', function () {
        function link(scope) {

            scope.reactAppContainerId = generateUniqueId();

            scope.onAfterReactAppContainerRender = function () {
                ReactDom.render(
                    React.createElement(scope.component, scope.props),
                    document.getElementById(scope.reactAppContainerId)
                );
            };
        }

        return {
            link: link,
            restrict: 'E',
            scope: {
                component: '=component',
                props: '=props',
            },
            /**
             * ng-show="onAfterReactAppContainerRender()" is a way to make code run
             * AFTER the parent div is rendered. This is a bit of an undocumented
             * hack but it works well.
             */
            template: `
<div id="{{reactAppContainerId}}">
    <div ng-show="onAfterReactAppContainerRender()"></div>
</div>`
        }
    }
);
