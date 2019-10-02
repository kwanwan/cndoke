/**
 * Application Name: CafeSupremo
 * ViewModel: Logout
 * Author: Rayes Huang
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'config/appconfig', 'ojs/ojknockout'],
 function(oj, ko, $, app, appConfig) {

    function LogoutViewModel() {
      var self = this;
      var router = oj.Router.rootInstance;
      self.logoutmsg = "logging out";

      self.close = function() {
        router.go('welcome');
      };

      app.logg(false);
      location.assign('/');
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new LogoutViewModel();
  }
);
