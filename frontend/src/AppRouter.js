import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router"
import { Provider } from 'react-redux'

import App from "./App";
import PaymentInfo from './components/PaymentInfo';
import PaymentDetails from './components/PaymentInfo/PaymentDetails';
export const AppRouter = ({history, store}) => {

    return ( <Provider store={store}>
        <ConnectedRouter history={history} >
            <Switch>
                <App>
                    <Route exact path="/payment_info" component={PaymentInfo}></Route>
                    <Route exact path="/payment_gateway" component={PaymentDetails}></Route>
                </App>
            </Switch>
        </ConnectedRouter>
    </Provider>
    )
}