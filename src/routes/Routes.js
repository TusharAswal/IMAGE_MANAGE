import React, { Element } from "react";
import {
  Scene,
  Router,
  Modal,
  Reducer,
  Drawer,
  Dimensions
} from "react-native-router-flux";
import { StatusBar } from "react-native";
import LoginContainer from "../containers/LoginContainer";
import Details from "../containers/Details";
import DrawerCom from "../components/Drawer";
import Historyis from "../containers/History";
import Settings from "../containers/Settings";
// const { height, width } = Dimensions.get("window");

class Routes extends React.Component {
  render(): Element<*> {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" hideNavBar initial component={LoginContainer} />
          <Scene key="main">
            <Drawer
              key="drawer"
              // drawerWidth={width * 0.65}
              hideNavBar
              contentComponent={DrawerCom}
            >
              <Scene key="details" hideNavBar component={Details} />
              <Scene key="history" hideNavBar component={Historyis} />
              <Scene key="settings" hideNavBar component={Settings} />
            </Drawer>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
export default Routes;
