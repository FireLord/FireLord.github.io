---
title: How to speed up rom compilation
date: 2017-12-28T11:27:43+05:30
draft: false
youtube: https://www.youtube.com/embed/zwGDz_Sn7YQ
---
### What is ccache?
You can optionally tell the build to use the ccache compilation tool. Ccache acts as a compiler cache that can be used to speed up rebuilds. This works very well if you use make clean often, or if you frequently switch between different build products.

##### 1. Open .bashrc to set cache export
```bash
cd
gedit .bashrc
--- At last of bashrc file---
# ccache
export USE_CCACHE=1
```

##### 2. Go to your rom folder & paste the following
```bash
cd android/roms/los-n (example rom folder)
prebuilts/misc/linux-x86/ccache/ccache -M 50G (for linux)
prebuilt/linux-x86/ccache/ccache -M 50G (for Mac OS)
```

##### 3. Now enable it
```bash
source ~/.bashrc
```