import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Base from 'lib/components/Base'

class AppRouter extends Base {

    constructor(props) {
        super(props)
        this._onUpdate = this.onUpdate.bind(this)
        // Component properties
        this.propsInfos = {
            required : {
                routes: {}
            },
            optionnal : {
                onUpdate: {}
            }
        }
    }
    
    onUpdate() {
        if (this.props.onUpdate) {
            this.props.onUpdate()
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
            <Router history={browserHistory} onUpdate={this._onUpdate}>
                {this.props.routes.map(this.buildRoutes.bind(this))}
            </Router>
        );
    }

}
export default AppRouter
