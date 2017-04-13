import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Base from 'Base'

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
        if (route.routes) {
            return(
                <Route key={index} path={route.path} component={route.component}>
                    {route.routes.map(this.buildRoutes.bind(this))}
                </Route>
            );
        } else {
            return(<Route key={index} path={route.path} component={route.component} />);
        }
    }
    
    render() {
        console.log("ROUTER RENDER")
        console.log(this.props.routes)
        this.buildProps('AppRouter')
        return (
            <Router history={browserHistory}>
                {this.props.routes.map(this.buildRoutes.bind(this))}
            </Router>
        );
    }

}
export default AppRouter;
