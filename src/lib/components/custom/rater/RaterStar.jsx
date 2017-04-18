import React from 'react'
import Base from 'lib/components/Base'

import { Glyphicon } from 'lib/exports'

import './ap-rater-star.scss'

class RaterStar extends Base {

    constructor(props) {
        super(props)
        this.baseClasses = [ 'ap-rater-star' ]
        // Sub components properties
        this.fullStarProps = { className: 'ap-rater-star-full', glyph: 'star' }
        this.emptyStarProps = { className: 'ap-rater-star-empty', glyph: 'star-empty' }
        // Component properties
        this.propsInfos = {
            required : {
                value: {}
            },
            optionnal : {
            }
        }
    }
    
    // Rendering functions //
    // --------------------------------------------------------------------------------

    _resolveValue() {
        let value = this.props.value
        if (value < 0 || value > 5) {
            return 0
        }
        return Math.round(value)
    }

    _buildFullStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            result.push(<Glyphicon key={'full-' + i} {...this.fullStarProps} />)
        }
        return result
    }

    _buildEmptyStars(nb) {
        let result = []
        for (let i = 0 ; i < nb ; i ++) {
            result.push(<Glyphicon key={'empty-' + i} {...this.emptyStarProps} />)
        }
        return result   
    }
    
    render() {
        this.buildProps('RaterStar')
        let value = this._resolveValue()
        return (
            <div className={this.className}>
                {this._buildFullStars(value)}
                {this._buildEmptyStars(5 - value)}
            </div>
        )
    }
}
export default RaterStar
