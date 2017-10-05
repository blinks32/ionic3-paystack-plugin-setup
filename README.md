
## Check Out More Of The Tutorial [Here]()

### Create An account With [Paystack](https://paystack.com/), Copy Your PkText key 


# Paste The below code in config.xml file at android Platform tag `<platform>add here</platform>` and replace 'INSERT-PUBLIC-KEY-HERE' with your public key.

```bash
<preference name="android-minSdkVersion" value="16" />
    <config-file target="AndroidManifest.xml" parent="application">
      	<meta-data android:name="co.paystack.android.PublicKey" android:value="INSERT-PUBLIC-KEY-HERE"/>
    </config-file>
```
### Install:

```bash
$npm install
```
Then Install The Custom config cordova plugin, to automatically edit the configuration files in the `platforms/ directory`, You can Find Out More [here](https://github.com/dpa99c/cordova-custom-config#overview)

```bash
$ cordova plugin add cordova-custom-config
```
###Afterwards Install cordova plugin paystack.

```bash
$ cordova plugin add cordova-plugin-paystack
```
