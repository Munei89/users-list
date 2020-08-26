import React from 'react';
import { shallow } from 'enzyme';
import ContentWrapper from './index';

describe('ContentWrapper', () => {
    it('Should render ContentWrapper component', () => {
        let wrapper = shallow(<ContentWrapper />);
        expect(wrapper).toMatchSnapshot();
    });
});
