import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '@telerik/kendo-react-popup';

// e2e-utils is a module exposed from react-tasks
// it exports `$` and `withRoot` - higher order function for describe (example below)
import { withRoot } from 'e2e-utils';

// `root` parameter is a jQuery object which includes chai-jquery in it.
// chai-jquery adds a should method to the jQuery object.
// See https://github.com/chaijs/chai-jquery#assertions for available assertions.
describe('Popup', withRoot(root => {
    it('should render a div', () => {
        ReactDOM.render( <Popup />, root[0]);
        root.find("div").should.have.class("k-popup");
    });
}));
