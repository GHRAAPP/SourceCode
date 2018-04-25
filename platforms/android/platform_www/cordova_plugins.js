cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.xmartlabs.cordova.market/www/market.js",
        "id": "com.xmartlabs.cordova.market.Market",
        "clobbers": [
            "cordova.plugins.market"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-keyboard-ams/www/keyboard.js",
        "id": "cordova-plugin-keyboard-ams.keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-cszbar/www/zbar.js",
        "id": "cordova-plugin-cszbar.zBar",
        "clobbers": [
            "cloudSky.zBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.xmartlabs.cordova.market": "1.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-keyboard-ams": "1.3.1",
    "cordova-plugin-network-information": "1.3.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-sqlite-storage": "2.0.2",
    "cordova-plugin-cszbar": "1.3.2"
};
// BOTTOM OF METADATA
});