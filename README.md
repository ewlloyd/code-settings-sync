# Visual Studio Code Settings Sync

[![Version](https://vsmarketplacebadge.apphb.com/version/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

[![Installs](https://vsmarketplacebadge.apphb.com/installs/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

[![Ratings](https://vsmarketplacebadge.apphb.com/rating/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)


**Type Sync in command Palette in order to view all commands.**

## Key Features
```
1. Use your GitHub account token and Gist.
2. Easy to Upload and Download on one click.
3. Upload Key : Shift + Alt + U
4. Download Key : Shift + Alt + D
5. Use Other User's Public Gist to completely sync your settings with them.
6. Show a summary page at the end with details.
7. Auto Download Latest Settings on Startup.
8. Auto upload Settings on file change.
```      

## It Syncs
```
1. Settings File
2. Keybinding File
3. Launch File
4. Snippets Folder
5. VSCode Extensions
```
   
## Steps to Get the GitHub Key.

This extension requires a Personal Access Token from your GitHub account. Here's how: You can create one simply by looking at the following pictures. Make sure you add **Gist** in scope.

**First, log into GitHub, go to [Settings / Personal Access Tokens](https://github.com/settings/tokens), and click [Generate New Token](](https://github.com/settings/tokens/new)**


![Goto Settings / Personal Access Tokens](http://shanalikhan.github.io/img/github1.PNG)

**Next, enter a Token Description and check the "gist" scope under Select Scopes**

![Select Scopes](http://shanalikhan.github.io/img/github2.PNG)

**Then, click the clipboard icon to copy the token**

![Get Unique Key](http://shanalikhan.github.io/img/github3.PNG)


> Make sure you save the key somewhere safe for future use.


## Upload Your Settings for the First Time


**Press Shift + Alt + U. You'll be prompted for the token you just created.**

> Alternatively, you can press Ctrl + P for the Command Palette and type ">Sync:Upload".

Paste the token into the prompt and press Enter.

![GitHub account access token](http://shanalikhan.github.io/img/upload1.png)

**This will upload your settings to a new Gist, and show the Gist ID.**
Copy this Gist ID in order to download your settings to Visual Studio Code running on other machines.

![uploaded automatically](http://shanalikhan.github.io/img/upload2.png)


## Download your Settings

**Press Shift + Alt + D. You'll be prompted for your GitHub Personal Access Token.** You *did* save it somewhere, didn't you?

> Alternatively, you can press Ctrl + P for the Command Palette and type ">Sync:Download".

Enter the token into the prompt and press Enter.

![GitHub account access token](http://shanalikhan.github.io/img/upload1.png)

**Enter Your Gist ID.**
Here's where you enter the Gist ID you got from the Upload operation.

![Enter Your Gist ID](http://shanalikhan.github.io/img/download2.png)

**Settings Downloaded.**
You are Done! All your settings are downloaded to your local Visual Studio Code.

![Enter Your Gist ID](http://shanalikhan.github.io/img/download3.png)

## Reset Token / Gist Settings

> Type ">Sync" In Command Palette and select Reset Token and Gist Settings

## Toggle Auto Download

Auto Download is **enabled by default**. It will sync all the settings by default when the editor starts.
Please make sure you have a valid GitHub token and Gist available to make it work properly.

Select Command **"Sync:Advanced Options > Toggle Auto-Download On Startup"** command to Turn ON / OFF the auto download.

## Toggle Force Download

Force Download is **disabled by default**. By default extension won't download the latest settings if you already have the latest downloaded version, but sometime when you delete some extension locally and don't upload the settings it will still show you have latest versions by date or time checks, by turning this ON it will always download the cloud settings on startup.

Please make sure you have a valid GitHub token and Gist available to make it work properly.

Select Command **"Sync:Advanced Options > Toggle Force Download"** command to Turn ON / OFF the force download.

## Toggle Auto-Upload on change
Auto-upload is **disabled by default**. When the settings are changed and saved this feature will automatic start the upload process and save the settings online.

Please make sure you have a valid GitHub token and Gist available to make it work properly.

Select Command **"Sync:Advanced Options > Toggle Auto-Upload on Setting Change"** command to Turn ON / OFF the auto upload.

## Toggle Summary

Summary is **enabled by default** which shows all the files and extensions that are added or deleted in a single page.
You may turn it off in order to make the upload and download process clean and quiet.  

Select Command **"Sync:Advanced Options > Toggle Summary Page On Upload / Download"** command to Turn ON / OFF the auto download.

## Create Public Gist To Share

By default, it creates secret Gist so only you can see it but if you want to share your Gist with other users, you can set it to public.
You can't change the exiting Gist type from secret to public so it will reset the Gist ID so you can create new Gist with all the existing editor settings.

Select Command **"Sync:Advanced Options > Public / Private Gist Mode & Reset Gist"**

## Fetch Other User's Settings

You may give the Gist ID to other users, your friends or employees so they download each of the extensions or settings you upload but they can't edit your Gist or upload anything on your Gist.

Select Command **"Sync:Advanced Options > Fetch Other User's Settings"**

# Step By Step Tutorial For 

[How to share your visual studio code settings](http://shanalikhan.github.io/2016/09/02/how-to-Share-visual-studio-code-settings.html)


# How To Contribute
Download source code and install dependencies

```
git clone https://github.com/shanalikhan/code-settings-sync.git
cd code-settings-sync
npm install
code .
```
Make the respective code changes.

Go to the debugger in VS Code, choose `Launch Extension` and click run. You can test your changes.

Submit a Pull Request.
   

    
# [Contributors](https://github.com/shanalikhan/code-settings-sync/graphs/contributors)
# [Release Notes](http://shanalikhan.github.io/2016/05/14/Visual-studio-code-sync-settings-release-notes.html)
    
# License
MIT

[![Version](https://vsmarketplacebadge.apphb.com/version/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

[![Installs](https://vsmarketplacebadge.apphb.com/installs/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

[![Ratings](https://vsmarketplacebadge.apphb.com/rating/Shan.code-settings-sync.svg)](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
