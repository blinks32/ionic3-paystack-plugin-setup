
### Check Out Full Tutorial [Here]()

### Create An account With [Paystack](https://paystack.com/), Copy Your PkText key 

![screenshot](https://user-images.githubusercontent.com/7928001/31224834-d0407caa-a962-11e7-854e-77aa34af3fe8.png)

Paste The below code in config.xml file in the android Platform tag `<platform>add here</platform>` and replace 'INSERT-PUBLIC-KEY-HERE' with your public key.

```bash
<preference name="android-minSdkVersion" value="16" />
    <config-file target="AndroidManifest.xml" parent="application">
      	<meta-data android:name="co.paystack.android.PublicKey" android:value="INSERT-PUBLIC-KEY-HERE"/>
    </config-file>
```
### Installation:

```bash
$npm install
```
Then Install The Custom config cordova plugin, to automatically edit the configuration files in the `platforms/ directory`, You can Find Out More [here](https://github.com/dpa99c/cordova-custom-config#overview)

```bash
$ cordova plugin add cordova-custom-config
```
Afterwards Install cordova plugin paystack.

```bash
$ cordova plugin add cordova-plugin-paystack
```
