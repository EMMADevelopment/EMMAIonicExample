cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-emma-sdk.emma",
      "file": "plugins/cordova-plugin-emma-sdk/www/emma.js",
      "pluginId": "cordova-plugin-emma-sdk",
      "clobbers": [
        "window.plugins.EMMA"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-emma-sdk": "1.8.0"
  };
});