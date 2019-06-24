// import { shallow } from 'enzyme';
// import React from 'react';
// import { exportAllDeclaration } from '@babel/types';
//import CounterButton from './CounterButton';

// it('expect to render CounterButton component', () => {
//     const mockColor = 'red'
//     exportAllDeclaration(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
// })

// it('correctly increamemnts the counter', () => {
//     const mockColor = 'red'
//     const wrapper = shallow(<CounterButton color={mockColor} />);

//     wrapper.find('[id="counter"]').simulate('click');
//     wrapper.find('[id="counter"]').simulate('click');
//     expect(wrapper.state()).toEqual({ count: 2 });
// })