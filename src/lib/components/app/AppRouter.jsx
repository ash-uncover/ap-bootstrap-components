import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Base from 'lib/components/Base'

class AppRouter extends Base {

    constructor(props) {
        super(props)
        // Component properties
        this.propsInfos = {
            required : {
                routes: {}
            },
            optionnal : {
            }
        }
    }
     
    buildRoutes(route, index) {
        let path = route.path
        if (path && path !== '/' && path.startsWith('/')) {
            path = path.substring(1)
        }
        let key = route.path + '-' + index
        if (route.routes) {
            return(
                <Route key={key} path={path} component={route.component}>
                    {route.routes.map(this.buildRoutes.bind(this))}
                </Route>
            )
        } else if (route.path) {
            return(<Route key={key} path={path} component={route.component} />)
        } else {
            return(<IndexRoute key={key} component={route.component} />)
        }
    }
    
    render() {
        this.buildProps('AppRouter')
        return (
            <Router history={browserHistory}>
                {this.props.routes.map(this.buildRoutes.bind(this))}
            </Router>
        );
    }

}
export default AppRouter
