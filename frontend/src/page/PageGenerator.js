import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import PageStudent from './PageStudent'

class PageGenerator extends Component {

    render() {
        return (
            <div>
                <Switch>
                <Route path="/" exact component={PageStudent}/>
                <Route path="/student" exact component={PageStudent}/>
                </Switch>
            </div>
        )
    }

}

export default PageGenerator;