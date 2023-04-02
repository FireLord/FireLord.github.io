---
title: "How to Make Aex Rom"
date: 2018-04-06T11:27:43+05:30
draft: false
youtube: https://www.youtube.com/embed/U4pnLY6q8gw
---
### What is Jenkins?
Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery. (Wikipedia)

##### 1. Required packages
```bash
sudo apt-get update
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

##### 2. Start jenkins service
```bash
service jenkins start
```

##### 3. Command to fix permission
```bash
setfacl -m user:jenkins:rwx ~/
setfacl -m user:jenkins:rwx /home/username
```

### Link for plugins & other useful links
1. [https://plugins.jenkins.io/ansicolor](https://plugins.jenkins.io/ansicolor)
2. [https://plugins.jenkins.io/simple-theme-plugin](https://plugins.jenkins.io/simple-theme-plugin)
3. [https://plugins.jenkins.io/publish-over-ftp](https://plugins.jenkins.io/publish-over-ftp)
4. [http://afonsof.com/jenkins-material-theme](http://afonsof.com/jenkins-material-theme/)
