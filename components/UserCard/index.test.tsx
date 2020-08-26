import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './index';

describe('StyledText', () => {
    it('Should render UserCard component', () => {
        let wrapper = shallow(<UserCard />);
        expect(wrapper).toMatchSnapshot();
    });
});
