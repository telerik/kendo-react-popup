import * as React from 'react';
import { shallow } from 'enzyme';
import Popup from '../src/Popup';
import { Slide } from '@telerik/kendo-react-animation';

describe('Popup', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render an Slide component', () => {
        result = shallow(<Popup />);

        expect(result.type()).toEqual(Slide);
    });

    it('should render k-popup className', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        expect(result.props().className).toEqual('k-popup');
    });

    it('should render Slide with "down" direction', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        const direction = result.props().direction;

        expect(direction).toEqual('down');
    });

    it('should render Slide with "up" direction when flipped', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        result.setState({
            flipped: true
        });

        const direction = result.props().direction;

        expect(direction).toEqual('up');
    });

    it('should render position style', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        result.setState({
            position: { top: '10px', left: '10px' }
        });

        expect(result.props().style).toEqual(result.state().position);
    });

    it('should not render passed children show:false', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        expect(result.children().length).toEqual(0);
    });

    it('should render passed children show:true', () => {
        result = shallow(<Popup show><div>content</div></Popup>);

        expect(result.children().length).toEqual(1);
    });
});
