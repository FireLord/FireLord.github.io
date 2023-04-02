---
title: "How to Make Aex Rom"
date: 2017-12-29T11:27:43+05:30
draft: false
youtube: https://www.youtube.com/embed/dQnhdLxVfjc
---
### What is device manifest?
Its a simple xml based file, the repo tool reads it and clones the repos inside it.

### Basic structure of manifest
```xml
<?xml version="1.0" encoding="UTF-8"?>
<manifest>
     <project name=""  path=""  remote=""  revision="" />
</manifest>
```

### Where to paste this?
```bash
cd android/roms/los-n/
mkdir .repo/local_manifests/
```