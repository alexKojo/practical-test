// import React from 'react';
// import Hello from './Hello.jsx';
// import Info from './Info.jsx';

// const App = () => (
//   <div>
//     <h1>Welcome to Meteor!</h1>
//     <Hello />
//     <Info />
//   </div>
// );

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './components/Form'

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Add Member</Link>
          </li>
          <li>
            <Link to="/dashboard">Family Tree</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Add Member</h2>
      <Form></Form>
    </div>
  );
}


function Dashboard() {
  return (
    <div>
      <h2>Family Tree</h2>
    </div>
  );
}
