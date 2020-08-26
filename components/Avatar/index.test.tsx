import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './index';

describe('Avatar', () => {
    it('Should render styled component', () => {
        let wrapper = shallow(<Avatar />);
        expect(wrapper).toMatchSnapshot();
    });
});
