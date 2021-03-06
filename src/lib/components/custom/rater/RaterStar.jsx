import React from 'react'
import Base from 'lib/components/Base'

import { Glyphicon, Button } from 'lib/exports'

import './ap-rater-star.scss'

class RaterStar extends Base {

    constructor(props) {
        super(props)
        this.baseClasses = [ 'ap-rater' ]
        // Sub components properties
        this.raterProps = {}
        this.banCircleProps = { 
            className: 'ap-rater-ban',
            glyph: 'ban-circle' 
        }
        this.fullStarProps = { 
            className: 'ap-rater-star ap-rater-star-full', 
            glyph: 'star' 
        }
        this.emptyStarProps = { 
            className: 'ap-rater-star ap-rater-star-empty', 
            glyph: 'star-empty' 
        }
        // Component properties
        this.propsInfos = {
            required : {
            },
            optionnal : {
                value: {},
                onChange: {},
                starMax: { defaultValue: 0, store: this.raterProps }
            }
        }
    }
    

    // View Callbacks //
    // --------------------------------------------------------------------------------

    onChange(value, event) {
        this.props.onChange && this.props.onChange(event, value)
    }


    // Rendering functions //
    // --------------------------------------------------------------------------------

    _resolveValue() {
        let value = this.props.value || 0
        if (value < 0 || this.props.starMax && value > this.props.starMax) {
            return 0
        }
        return Math.round(value)
    }

    _buildReset() {
        if (this.props.onChange) {
            return (
                <Button
                    className='ap-rater-reset-button'
                    bsSize='xs'
                    onClick={this.onChange.bind(this, 0)} >
                    <Glyphicon {...this.banCircleProps} />
                </Button>
            )
        }
        return null
    }

    _buildFullStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            if (this.props.onChange) {
                result.push(
                    <Button
                        className='ap-rater-button'
                        key={i} 
                        bsSize='xs'
                        onClick={this.onChange.bind(this, i + 1)} >
                        <Glyphicon {...this.fullStarProps} />
                    </Button>
                )
            } else {
                result.push(<Glyphicon key={'full-' + i} {...this.fullStarProps} />)
            }
        }
        return result
    }

    _buildEmptyStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            if (this.props.onChange) {
                result.push(
                    <Button
                        className='ap-rater-button'
                        key={this.props.value + i} 
                        bsSize='xs'
                        onClick={this.onChange.bind(this, this.props.value + i + 1)} >
                        <Glyphicon {...this.emptyStarProps} />
                    </Button>
                )
            } else {
                result.push(<Glyphicon key={'empty-' + i} {...this.emptyStarProps} />)
            }
        }
        return result   
    }

    _buildClasses() {
        let classes = this.baseClasses.slice()
        if (this.props.onChange) classes.push('ap-rater-change')
        return classes
    }
    
    render() {
        this.buildProps('RaterStar')
        let value = this._resolveValue()
        return (
            <div className={this.className}>
                {this._buildReset()}
                {this._buildFullStars(value)}
                {this._buildEmptyStars((this.props.starMax || 0) - value)}
            </div>
        )
    }
}
export default RaterStar
