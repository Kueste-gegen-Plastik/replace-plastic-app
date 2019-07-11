#!/bin/bash
set -e
set -o pipefail
APK_FOLDER="./platforms/android/app/build/outputs/apk/release"
BUILD_FOLDER="~/Library/Android/sdk/build-tools/29.0.0"
rm -f "$APK_FOLDER/app-release-unsigned-aligned.apk"
rm -f "$APK_FOLDER/replaceplastic-release.apk"
eval $BUILD_FOLDER/zipalign -v -p 4 "$APK_FOLDER/app-release-unsigned.apk" "$APK_FOLDER/app-release-unsigned-aligned.apk"
eval $BUILD_FOLDER/apksigner sign --ks "$APK_FOLDER/replaceplastic.jks" --out "$APK_FOLDER/replaceplastic-release.apk" "$APK_FOLDER/app-release-unsigned-aligned.apk"
open "$APK_FOLDER"
