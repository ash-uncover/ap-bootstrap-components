import React from 'react'
import Base from 'lib/components/Base'

import './ap-google.scss'

/*
 * onChange event {
 *      lattitude: double,
 *      longitude: double,
 *      address: string,
 *      postalCode: string,
 *      city: string,
 *      country: string
 * }
 */
class GoogleAutocomplete extends Base {

    constructor(props) {
        super(props)
        // Members
        this.geocoder = new google.maps.Geocoder()
        // Base classes
        this.baseClasses = [ 'ap-google-autocomplete', 'autocomplete', 'form-control' ]
        // Sub component properties

        // Component properties
        this.propsInfos = {
            required : {
            },
            optionnal : {
                onChange: {},
                disabled: { defaultValue: false },
                placeholder: {},
                location: {},
                options: { defaultValue: {} }
            }
        }
        if (props.location)
            this.getDefaultValue(props)
        this.state = {location: props.location};
    }

    // State management functions //
    // --------------------------------------------------------------------------------
    

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.input, this.props.options)
        this.autocomplete.addListener('place_changed', this._autocompleteChange.bind(this))

        document.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location && nextProps.location.lattitude && nextProps.location.longitude) {
            if (!this.state.location || this.state.location.lattitude != nextProps.location.lattitude || this.state.location.longitude != nextProps.location.longitude) {
                this.getDefaultValue(nextProps)
                this.setState({ location: nextProps.location })
            }
        } else {
            this.input.value = ''
            this.setState({ location: null })
        }
    }

    onScroll() {
        document.activeElement.blur();
    }

    _autocompleteChange() {
        let place = this.autocomplete.getPlace()

        for (let i = 0; i < place.address_components.length; i++) {
            let comp = place.address_components[i]
            place[comp.types[0]] = comp.long_name
        }

        this.setState({
            location: {
                lattitude: place.geometry.location.lat(), 
                longitude: place.geometry.location.lng()
            }
        })
        
        if (this.props.onChange) {
            this.props.onChange({
                lattitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                address: place.street_number + ' ' + place.route,
                postalCode: place.postal_code,
                city: place.locality,
                country: place.country
            })
        }
    }

    reverseGeoCodeResult(result, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            this.input.value = result[0].formatted_address
        } else {
            console.error('ReverseGeoCode Error: ' + status)
        }
    }
    
    getDefaultValue(props) {
        let latLng = new google.maps.LatLng(props.location.lattitude, props.location.longitude)
        this.geocoder.geocode({ location: latLng }, this.reverseGeoCodeResult.bind(this))
    }
    
  

    // Rendering functions //
    // --------------------------------------------------------------------------------
    
    render() {
        this.buildProps('GoogleAutocomplete')
        return (
            <input 
                className={this.className}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder || ''}
                type='text'
                ref={(c) => { this.input = c } } />
        )
    }
}
export default GoogleAutocomplete