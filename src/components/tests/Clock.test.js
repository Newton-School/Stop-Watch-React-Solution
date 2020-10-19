import Clock from '../Clock'
import React from 'react';
import { shallow,mount } from 'enzyme';
import Time from '../Time';


describe('Clock',()=>{
    it('renders without crashing',()=>{
        mount(<Clock/>)
    })
    const wrapper = shallow(<Clock/>)
    it('if props is passed in Time Component',()=>{
        expect(wrapper.find(Time).props('date'))
    })
    it('if component did mount is used or not',()=>{
        let instance = wrapper.instance();
        expect(instance.componentDidMount())
    })
    it('if component did mount is used or not',()=>{
        let instance = wrapper.instance();
        expect(instance.componentWillUnmount())
    })
    
})