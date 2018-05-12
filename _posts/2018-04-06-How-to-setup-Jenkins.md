---
title: How to setup Jenkins in Linux
layout: post
featured-img: jenkins.png
cardcolor: red darken-1
youtubelink: https://www.youtube.com/embed/U4pnLY6q8gw
---
### What is Jenkins?
Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery. (Wikipedia)

##### 1. Required packages
<div class="card">
<pre class="language-bash">
<code class="language-bash">
sudo apt-get update
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
</code>
</pre>
</div>

##### 2. Start jenkins service
<div class="card">
<pre class="language-bash">
<code class="language-bash">
service jenkins start
</code>
</pre>
</div>

##### 3. Command to fix permission
<div class="card">
<pre class="language-bash">
<code class="language-bash">
setfacl -m user:jenkins:rwx ~/
setfacl -m user:jenkins:rwx /home/username
</code>
</pre>
</div>

### Link for plugins & other useful links
1. [https://plugins.jenkins.io/ansicolor](https://plugins.jenkins.io/ansicolor)<br>
2. [https://plugins.jenkins.io/simple-theme-plugin](https://plugins.jenkins.io/simple-theme-plugin)<br>
3. [https://plugins.jenkins.io/publish-over-ftp](https://plugins.jenkins.io/publish-over-ftp)<br>
4. [http://afonsof.com/jenkins-material-theme/](http://afonsof.com/jenkins-material-theme/)<br>
