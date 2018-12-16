//
// This is the server side entry point for the React app.
// It's loaded by the @walmart/electrode-react-webapp2 plugin specified in config/default.json
//

import { routes } from "../../client/routes";
import { createStore } from "redux";
import rootReducer from "../../client/reducers";
const ReduxRouterEngine = require("@walmart/electrode-redux-router-engine");
const Promise = require("bluebird");

function createReduxStore(req, match) {
  const initialState = {
    checkBox: { checked: false },
    number: { value: 999 }
  };

  const store = createStore(rootReducer, initialState);
  return Promise.resolve(store);
}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = req => {
  const app = (req.server && req.server.app) || req.app;
  if (!app.routesEngine) {
    app.routesEngine = ReduxRouterEngine(routes, createReduxStore);
  }

  return app.routesEngine(req);
};
