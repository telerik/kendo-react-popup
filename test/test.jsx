import * as React from 'react';
import { shallow } from 'enzyme';
import Popup from '../src/Popup';

describe('Popup', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render a div', () => {
        result = shallow(<Popup />);
        expect(result.type()).toEqual('div');
    });
});
