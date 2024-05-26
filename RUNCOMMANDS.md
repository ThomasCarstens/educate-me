# eas with ios

 1914  eas build --profile production --platform ios
 1915  history | grep ios
 1916  eas submit -p ios


 ## Error:  Push Notifications

 Although delivery was successful, you may want to correct the following issues in your next delivery. Once you've corrected the issues, upload a new binary to App Store Connect.

ITMS-90078: Missing Push Notification Entitlement - Your app appears to register with the Apple Push Notification service, but the app signature's entitlements do not include the 'aps-environment' entitlement. If your app uses the Apple Push Notification service, make sure your App ID is enabled for Push Notification in the Provisioning Portal, and resubmit after signing your app with a Distribution provisioning profile that includes the 'aps-environment' entitlement. Xcode does not automatically copy the aps-environment entitlement from provisioning profiles at build time. This behavior is intentional. To use this entitlement, either enable Push Notifications in the project editor's Capabilities pane, or manually add the entitlement to your entitlements file. For more information, see https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1. 


# icons

https://www.img2go.com


# crash on device

When opening the modal on Game Selection Screen
## Fix 1: Using a community {Modal} based on the Docs {Modal}. Tested successfully in SelectionScreen.

# crash with auth

When Session Persistence redirects to SelectionScreen without gameFile being in props. Solution might be AsyncStorage.
 -- Bigger problem right now is crash on device, but change auth file for persistence.

# redesigned login screen and bulk download button put on backburner
{/* DISABLED BECAUSE IT FETCHES ONE GAME BUT APPEARS TO FETCH ALL WHEN MOVING TO ANOTHER MODAL}


# Feedback is broken.
