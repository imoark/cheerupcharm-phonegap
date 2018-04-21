# PhoneGap CheerUpCharm [![Build status](https://ci.appveyor.com/api/projects/status/4yq7ij035ya3g5bq/branch/master?svg=true)](https://ci.appveyor.com/project/stevengill/phonegap-cli/branch/master) [![bitHound Score][bithound-img]][bithound-url] [![codecov](https://codecov.io/gh/phonegap/phonegap-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/phonegap/phonegap-cli)

An Android Version of CheerUpCharm

## Usage

#### PhoneGap Desktop

While you are running on Windows OS, please download the [PhoneGap Desktop App][phonegap-cli-url].

    PhoneGapSetup-win32.exe

Open the [PhoneGap Desktop App][phonegap-cli-url] and click the "+" button.
Choose `"Open existing PhoneGap project..."` and choose this git clone repository on your local.

    https://github.com/imoark/cheerupcharm-phonegap

Run the project until a green bar is shown at the bottom of the window and says `"Server is running on http://192.168.0.7:8000"` or your own specific ip address that has been set up by PhoneGap Desktop.

Now you need PhoneGap Mobile......

#### PhoneGap Mobile (Android)

Install [PhoneGap Developer][phonegap-app] on your Android Phone.

**Make sure that both your computer and your phone are connecting on the same Wi-Fi network.** Put the ip address that is shown on your PhoneGap Desktop.

Now, it works on your Android Phone.






[phonegap-cli-url]: https://github.com/phonegap/phonegap-app-desktop/releases/download/0.4.5/PhoneGapSetup-win32.exe
[phonegap-app]: https://play.google.com/store/apps/details?id=com.adobe.phonegap.app
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com
