// Radius of the earth in km
let EARTH_RADIUS = 6371 

export default class GeoHelper {

    static getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        let dLat = GeoHelper.deg2rad(lat2-lat1)
        let dLon = GeoHelper.deg2rad(lon2-lon1)
        let a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) + 
            Math.cos(GeoHelper.deg2rad(lat1)) * Math.cos(GeoHelper.deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        // Distance in km
        let d = EARTH_RADIUS * c
        return d
    }

    static deg2rad(deg) {
        return deg * (Math.PI/180)
    }
}