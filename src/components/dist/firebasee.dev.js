"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyDR1q7DKX5hll5N7djrwgqP1Z15lwwI_Vc",
  authDomain: "slack-22dc7.firebaseapp.com",
  databaseURL: "https://slack-22dc7.firebaseio.com",
  projectId: "slack-22dc7",
  storageBucket: "slack-22dc7.appspot.com",
  messagingSenderId: "617678830880",
  appId: "1:617678830880:web:cb1658ce5d0eb093ffeb45",
  measurementId: "G-7JBHEM8HPQ"
};

var firDB = _app["default"].initializeApp(config);

var _default = firDB.database().ref();

exports["default"] = _default;