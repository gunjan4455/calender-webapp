import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import moment from 'moment';

import { Calendar } from 'react-demo-calendar';

class Container extends React.Component {
  state = {
    dateObject : null
  };

  setDate = (dateObject) => {
    console.log('dateObject', dateObject.toS);
    this.props.history.push({
      pathname: '/',
      search: `?date=${dateObject.toString()}`
    });
    this.setState({ dateObject });
  };

  render() {
    return <Calendar dateObject={this.state.dateObject} setDate={this.setDate}/>;
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const dateObject = query.get('date') ? moment(query.get('date')) : null;
    this.setState({ dateObject });
  }
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Container}>
        </Route>
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
