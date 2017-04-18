import React from 'react'
import Base from 'lib/components/Base'

import './ap-busy-circles.scss'

class BusyCircles extends Base {

    constructor(props) {
        super(props)
        this.baseClasses = [ 'ap-busy-circles' ]
        this.propsInfos = {
            required : {
            },
            optionnal : {
            }
        }
    }

    render() {
        this.buildProps('BusyCircles')
        return (
            <div className={this.className}>
                <div className='ap-busy-circles-container'>
                    <div className='ap-busy-circle ap-busy-circle-1'/>
                    <div className='ap-busy-circle ap-busy-circle-2'/>
                    <div className='ap-busy-circle ap-busy-circle-3'/>
                    <div className='ap-busy-circle ap-busy-circle-4'/>
                    <div className='ap-busy-circle ap-busy-circle-5'/>
                    <div className='ap-busy-circle ap-busy-circle-6'/>
                    <div className='ap-busy-circle ap-busy-circle-7'/>
                    <div className='ap-busy-circle ap-busy-circle-8'/>
                </div>
            </div>
        )
    }
}
export default BusyCircles
