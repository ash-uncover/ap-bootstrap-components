import App from 'components/App'
import AppLinks from 'components/AppLinks'

import Bootstrap from 'components/bootstrap/Bootstrap'
import Badges from 'components/bootstrap/badges/Badges'
import Buttons from 'components/bootstrap/buttons/Buttons'
import Carousels from 'components/bootstrap/carousels/Carousels'
import Forms from 'components/bootstrap/forms/Forms'
import Images from 'components/bootstrap/images/Images'
import Glyphicons from 'components/bootstrap/glyphicons/Glyphicons'
import Grids from 'components/bootstrap/grid/Grids'
import Labels from 'components/bootstrap/labels/Labels'
import Panels from 'components/bootstrap/panels/Panels'
import Lists from 'components/bootstrap/lists/Lists'
import Tables from 'components/bootstrap/tables/Tables'

import Custom from 'components/custom/Custom'
import Busy from 'components/custom/busy/Busy'
import Calendars from 'components/custom/calendar/Calendars'
import ObjInfos from 'components/custom/objinfos/ObjInfos'
import Rater from 'components/custom/rater/Rater'
import GoogleAutocompletes from 'components/custom/googlemap/GoogleAutocompletes'
import GoogleMaps from 'components/custom/googlemap/GoogleMaps'

import Complex from 'components/complex/Complex'
import Auths from 'components/complex/auth/Auths'
import Stores from 'components/complex/stores/Stores'

let routes = [
	{ 
		path: '/', component: App, 
		routes: [
			{ component: AppLinks },
			{
				path: 'bootstrap', component: Bootstrap, 
				routes: [
					{ path: 'badges', component: Badges },
					{ path: 'buttons', component: Buttons },
					{ path: 'carousels', component: Carousels },
					{ path: 'forms', component: Forms },
					{ path: 'images', component: Images },
					{ path: 'glyphicons', component: Glyphicons },
					{ path: 'grid', component: Grids },
					{ path: 'labels', component: Labels },
					{ path: 'panels', component: Panels },
					{ path: 'lists', component: Lists },
					{ path: 'tables', component: Tables }
				]
			},
			{
				path: 'custom', component: Custom, 
				routes: [
					{ path: 'busy', component: Busy },
					{ path: 'calendars', component: Calendars },
					{ path: 'objinfos', component: ObjInfos },
					{ path: 'rater', component: Rater },
					{ path: 'googleautocomplete', component: GoogleAutocompletes },
					{ path: 'googlemap', component: GoogleMaps }
				]
			},
			{
				path: 'complex', component: Complex, 
				routes: [
					{ path: 'auth', component: Auths },
					{ path: 'stores', component: Stores }
				]
			}
		] 
	}
]

export default routes
