import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Notifications from './components/pages/Notifications';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/notifications" component={Notifications}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/settings" component={Settings}/>
    </Switch>
  );
}
