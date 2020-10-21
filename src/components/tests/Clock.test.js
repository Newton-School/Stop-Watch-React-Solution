import Clock from '../Clock'
import Time from '../Time';
import React from "react";
import { shallow,mount } from "enzyme"

describe('Clock',()=>{
    it('renders without crashing',()=>{
        mount(<Clock/>)
    })
    it('if second is increasing on timer start or not',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:0
        })
        let defaultsecond = ClockComponent.state('second')+3
        try{
            setInterval(() => {
                let second_to_be_tested = ClockComponent.state('second')
                console.log(second_to_be_tested)
                expect(defaultsecond).toBe(second_to_be_tested)
                done()
                defaultsecond=defaultsecond+3
            }, 3100)
        }
        catch(error){
            done(error)
        }
    })
    it('if minute is increasing after 60 seconds',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:58,
            minute:1
        })
        try{
            setInterval(() => {
                let minutevalue = ClockComponent.state('minute')
                expect(minutevalue).toBe(2)
                done()
            }, 3000)
        }
        catch(error){
            done(error)
        }
    })
    it('if hour is increasing after 60 minute',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:58,
            minute:59,
            hour:1
        })
        try{
            setInterval(() => {
                let hourvalue = ClockComponent.state('hour')
                expect(hourvalue).toBe(2)
                done()
            }, 3000)
        }
        catch(error){
            done(error)
        }
    })
})