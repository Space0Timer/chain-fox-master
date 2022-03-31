
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-file-opener2.FileOpener2",
          "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
          "pluginId": "cordova-plugin-file-opener2",
        "clobbers": [
          "cordova.plugins.fileOpener2"
        ]
        },
      {
          "id": "cordova-plugin-qrscanner.QRScanner",
          "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
          "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
          "QRScanner"
        ]
        },
      {
          "id": "cordova-plugin-qrscanner-codaxy.QRScanner",
          "file": "plugins/cordova-plugin-qrscanner-codaxy/www/www.min.js",
          "pluginId": "cordova-plugin-qrscanner-codaxy",
        "clobbers": [
          "QRScanner"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-file-opener2": "3.0.5",
      "cordova-plugin-qrscanner": "3.0.1",
      "cordova-plugin-qrscanner-codaxy": "3.0.3"
    };
    // BOTTOM OF METADATA
    });
    