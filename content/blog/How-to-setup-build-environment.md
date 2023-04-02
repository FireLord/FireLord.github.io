---
title: How to setup build environment
date: 2017-12-23T11:27:43+05:30
draft: false
youtube: https://www.youtube.com/embed/AhUqrr5sNwA 
---
### What are build tools?

Build tools are required files to compile the sources provided by Google. This 
includes various things like java, gcc, gnupg, etc.

### Min system requirement to make roms (android 7.x & android 8.x)

1. **CPU - 8 cores (x64 bit)**
2. **RAM - 12 GB**
3. **Storage - 200 GB**
4. **Internet - high speed internet as sources are above 25 GB**
5. **OS - Linux or Mac**

##### If you dont have a pc which meets min. system requirment then you can buy servers OR get one from google as trail. 

### Setting up Linux system

##### 1. Installing Java
```bash
sudo apt-get update
sudo apt-get install openjdk-8-jdk
```

##### 2. Required packages 
```bash
sudo apt-get install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip bc imagemagick 
```

### Setting up Git

##### 1. Set a Git username & email
```bash
git config --global user.name "YOUR USERNAME"
git config --global user.email "youremailid@example.com"
```

##### 2. Setting up SSH for git ( optional )

It helps to avoid typing username and password again and again whenever you push something [Click here](https://help.github.com/articles/connecting-to-github-with-ssh/)