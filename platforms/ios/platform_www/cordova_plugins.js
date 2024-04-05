cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-emma-sdk.emma",
      "file": "plugins/cordova-plugin-emma-sdk/www/emma.js",
      "pluginId": "cordova-plugin-emma-sdk",
      "clobbers": [
        "window.plugins.EMMA"
      ]
    },
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
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-emma-sdk": "1.7.1",
    "cordova-plugin-ionic-webview": "5.0.0"
  };
});