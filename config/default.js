module.exports = {
  plugins: {
    "webpack-dev": {
      module: "electrode-archetype-react-app-dev/lib/webpack-dev-hapi",
      priority: -1,
      enable: process.env.WEBPACK_DEV_MIDDLEWARE === "true" && process.env.WEBPACK_DEV === "true",
      options: {
        // webpack dev middleware options
        dev: {
          // user reporter that's called by the archetype's reporter
          reporter: reporterOptions => {
            // For example, you can start app server with `clap devbrk` and attach
            // to it with chrome://inspect, and then enable the debugger statement
            // below so chrome stop here every time webpack middleware finish compiling
            //
            // debugger
            //
          }
        }
      }
    }
  }
};
