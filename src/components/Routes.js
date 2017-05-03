import App from 'components/App'
import AppLinks from 'components/AppLinks'

import Bootstrap from 'components/bootstrap/Bootstrap'
import Badges from 'components/bootstrap/badges/Badges'
import Buttons from 'components/bootstrap/buttons/Buttons'
import Forms from 'components/bootstrap/forms/Forms'
import Glyphicons from 'components/bootstrap/glyphicons/Glyphicons'
import Grids from 'components/bootstrap/grid/Grids'
import Labels from 'components/bootstrap/labels/Labels'
import Panels from 'components/bootstrap/panels/Panels'
import Lists from 'components/bootstrap/lists/Lists'
import Tables from 'components/bootstrap/tables/Tables'

import Custom from 'components/custom/Custom'
import Busy from 'components/custom/busy/Busy'
import Rater from 'components/custom/rater/Rater'
import GoogleAutocompletes from 'components/custom/googlemap/GoogleAutocompletes'

import Complex from 'components/complex/Complex'
import Auths from 'components/complex/auth/Auths'

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
					{ path: 'forms', component: Forms },
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
					{ path: 'rater', component: Rater },
					{ path: 'googleautocomplete', component: GoogleAutocompletes }
				]
			},
			{
				path: 'complex', component: Complex, 
				routes: [
					{ path: 'auth', component: Auths }
				]
			}
		] 
	}
]

export default routes
