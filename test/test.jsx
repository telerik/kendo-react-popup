import * as React from 'react';
import { shallow } from 'enzyme';
import Popup from '../src/Popup';
import { Animation } from '@telerik/kendo-react-animation';

describe('Popup', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render an Animation component', () => {
        result = shallow(<Popup />);

        expect(result.type()).toEqual(Animation);
    });

    it('should render k-popup className', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        expect(result.props().className).toEqual('k-popup');
    });

    it('should render k-slide-down transitionName', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        const transitionName = result.props().transitionName;

        expect(transitionName.enter).toEqual('k-slide-down-enter');
        expect(transitionName.leave).toEqual('k-slide-down-leave');
    });

    it('should render k-slide-up transitionName when flipped', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        result.setState({
            flipped: true
        });

        const transitionName = result.props().transitionName;

        expect(transitionName.enter).toEqual('k-slide-up-enter');
        expect(transitionName.leave).toEqual('k-slide-up-leave');
    });

    it('should render position style', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        result.setState({
            position: { top: '10px', left: '10px' }
        });

        expect(result.props().style).toEqual(result.state().position);
    });

    it('should render a hidden child div', () => {
        result = shallow(<Popup />);

        const child = result.children().at(0);

        expect(child.type()).toEqual('div');
        expect(child.props().style.display).toEqual('none');
    });

    it('should render passed children', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        const child = result.children().at(0);

        expect(child.children().length).toEqual(1);
    });

    it('should keep same key if show prop was not changed', () => {
        result = shallow(<Popup><div>content</div></Popup>);

        result.setProps({ show: true });

        const contentKey = result.children().at(0).node.key;

        result.setProps({ show: true });

        const child = result.children().at(0);

        expect(child.node.key).toEqual(contentKey);
    });
});
