# Nzema East EHR - Windows, Android and Web app
© 2026 J. O. ACQUAAH. All Rights Reserved.

Folders:
- web/      the app itself (index.html) + installable web app files. THE ONLY PLACE TO EDIT THE INTERFACE.
- windows/  wrapper that builds the Windows .exe installer
- android/  wrapper that builds the Android .apk
- .github/  the GitHub robot (workflow) that builds everything

Windows and Android automatically copy web/ at build time, so all three have exactly the same interface.

## How to build with GitHub
1. Create a free account at github.com, then New repository (name e.g. nzema-ehr). Keep branch name "main".
2. Upload everything in this folder (including the hidden .github folder) to the repository.
3. (Optional, web app only) Needs a PUBLIC repo: Settings > Pages > Source: "GitHub Actions", then Actions > "Publish web app" > Run workflow.
4. Open the Actions tab > "Build installers". Wait for the green tick (about 5-10 minutes).
5. Click the finished run. Under Artifacts download:
   - windows-installer  (zip containing the .exe)
   - android-apk        (zip containing the .apk)
   The web app (optional, separate workflow) is at https://<username>.github.io/<repo>/
6. To rebuild after changes: edit web/index.html on GitHub and commit. Everything rebuilds.
   (Or Actions > Build installers > Run workflow.)

## Installing
- Windows: run the .exe (SmartScreen may warn: More info > Run anyway).
- Android: copy the .apk to the phone, open it, allow unknown sources.
- Web app: open the link in Chrome/Edge > menu > Install app / Add to Home screen.

## Notes
- Android file is a debug build (fine for sideloading, not for Play Store).
- Data is stored on each device. Use Backup data regularly; uninstalling erases local data.
