import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { VehicleList, VehicleInsert, VehicleUpdate, UserInsert, UserList, UserUpdate, RouteList, RouteInsert, RouteUpdate } from '../pages'
import { Sidebar } from '../components'
import '../components/sidebar.css'

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/vehicles/list" exact component={VehicleList} />
        <Route path="/vehicles/create" exact component={VehicleInsert} />
        <Route path="/vehicles/update/:id" exact component={VehicleUpdate} />
        <Route path="/routes/list" exact component={RouteList} />
        <Route path="/routes/create" exact component={RouteInsert} />
        <Route path="/routes/update/:id" exact component={RouteUpdate} />
        <Route path="/users/list" exact component={UserList} />
        <Route path="/users/create" exact component={UserInsert} />
        <Route path="/users/update/:id" exact component={UserUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
