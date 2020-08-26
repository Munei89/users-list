import React from 'react';
import { shallow } from 'enzyme';
import CardWrapper from './index';

describe('CardWrapper', () => {
    it('Should render styled component', () => {
        let wrapper = shallow(<CardWrapper />);
        expect(wrapper).toMatchSnapshot();
    });
});
