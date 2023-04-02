---
title: How to build Android Roms
date: 2017-12-25T11:27:43+05:30
draft: false
youtube: https://www.youtube.com/embed/_bz7OLtM2qY
---
### What is Android rom building?
Basically Android rom building means that you are bored with stock rom provided by your OEM or your stock rom is very old so you want to upgrade. So you sync the AOSP source or something related to it ( as per your needs) then build it and flash it.

##### 1. Installing repo tool 
```bash
mkdir -p ~/bin && curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo && chmod a+x ~/bin/repo
ls ~/bin/
```

##### 2. Open .bashrc to set repo tool
```bash
cd
gedit .bashrc
--- At last of bashrc file---
# Android Tools
export PATH=${PATH}:~/bin
```

##### 3. Syncing rom source
```bash
cd
mkdir -p android/roms/los-n
cd android/roms/los-n/
repo init -u git://github.com/LineageOS/android.git -b cm-14.1
repo sync -c -f --force-sync --no-clone-bundle --no-tags -j10
```

##### 4. Syncing device source (ex: for kuntao codenamed device)
```bash
git clone https://github.com/FireLord1/android_device_lenovo_kuntao -b cm-14.1 device/lenovo/kuntao/
git clone https://github.com/FireLord1/android_kernel_lenovo_msm8953 -b cm-14.1 kernel/lenovo/msm8953/
git clone https://github.com/FireLord1/android_vendor_lenovo_kuntao -b cm-14.1 vendor/lenovo/kuntao/
git clone https://github.com/LineageOS/android_packages_resources_devicesettings -b cm-14.1 packages/resources/devicesettings
git clone https://github.com/LineageOS/android_device_qcom_common -b cm-14.1 device/qcom/common
```

##### 5. How to build?
```bash
source build/envsetup.sh
lunch
make -j10 bacon
```

##### 6. Where to find my build?
```bash
cd $OUT
```