import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, VehicleList, VehicleInsert, VehicleUpdate, UserInsert, UserList, UserUpdate, RouteList, RouteInsert, RouteUpdate, InvoiceList } from '../pages'
import { Sidebar } from '../components'
import '../components/sidebar.css'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route path={'/login'} component={Login} />
        <PrivateRoute path="/vehicles/list" exact component={VehicleList} />
        <PrivateRoute path="/vehicles/create" exact component={VehicleInsert} />
        <PrivateRoute path="/vehicles/update/:id" exact component={VehicleUpdate} />
        <Route path="/routes/list" exact component={RouteList} />
        <Route path="/routes/create" exact component={RouteInsert} />
        <Route path="/routes/update/:id" exact component={RouteUpdate} />
        <PrivateRoute path="/users/list" exact component={UserList} />
        <PrivateRoute path="/users/create" exact component={UserInsert} />
        <PrivateRoute path="/users/update/:id" exact component={UserUpdate} />
        <PrivateRoute path="/invoices/list" exact component={InvoiceList} />
      </Switch>
    </Router>
  );
}

export default App;
