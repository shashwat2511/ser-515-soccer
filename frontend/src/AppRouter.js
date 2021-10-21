import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router"
import { Provider } from 'react-redux'

import App from "./App";
import RulesandRegulationsTM from "./components/RulesandRegulationsTM";
export const AppRouter = ({history, store}) => {

    return ( <Provider store={store}>
        <ConnectedRouter history={history} >
            <Switch>
                <App>
                    <Route exact path="/rules" component={RulesandRegulationsTM}></Route>
                </App>
            </Switch>
        </ConnectedRouter>
    </Provider>
    )
}