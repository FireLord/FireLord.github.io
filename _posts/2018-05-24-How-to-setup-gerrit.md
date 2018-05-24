---
title: How to setup Gerrit
layout: post
featured-img: gerrit.png
cardcolor: light-blue darken-1
youtubelink: https://www.youtube.com/embed/gLk88Mrwkn0
---
### What is gerrit?
Gerrit is a free, web-based team code collaboration tool. Software developers in a team can review each other's modifications on their source code using a Web browser and approve or reject those changes.(Wikipedia)<br>

##### 1. Required packages
<div class="card">
<pre class="language-bash">
<code class="language-bash">
sudo apt-get update
sudo apt-get install openjdk-8-jdk
sudo apt-get install gitweb
sudo apt-get install git-review
</code>
</pre>
</div>

##### 2. Link for gerrit and tools
a. [https://gerrit-releases.storage.googleapis.com/index.html](https://gerrit-releases.storage.googleapis.com/index.html)<br>
b. [https://gerrit-ci.gerritforge.com](https://gerrit-ci.gerritforge.com)<br>
c. [https://groups.google.com/forum/#!topic/repo-discuss/fmHMQpN-qMQ](https://groups.google.com/forum/#!topic/repo-discuss/fmHMQpN-qMQ)<br>

##### 3. Create gerrit user
<div class="card">
<pre class="language-bash">
<code class="language-bash">
sudo useradd gerrit && groupadd gerrit
cd /home
mkdir gerrit
chown -R gerrit:gerrit gerrit
</code>
</pre>
</div>

##### 4. Create folders in gerrit
<div class="card">
<pre class="language-bash">
<code class="language-bash">
cd /home/gerrit/
mkdir lib && mkdir plugins
</code>
</pre>
</div>

##### 5. Setup MySQL
[https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04)

##### 6. Setup gerrit MySQL
<div class="card">
<pre class="language-bash">
<code class="language-bash">
mysql -p
CREATE USER 'gerrit'@'localhost' IDENTIFIED BY 'yourpassword';
CREATE DATABASE reviewdb;
GRANT ALL ON reviewdb.* TO 'gerrit'@'localhost';
FLUSH PRIVILEGES;
exit;
</code>
</pre>
</div>

##### 7. Location for gerrit plugins
<div class="card">
<pre class="language-bash">
<code class="language-bash">
/home/gerrit/gerrit*.war
/home/gerrit/lib/github-oauth-2.14-SNAPSHOT.jar
/home/gerrit/plugins/github-plugin-2.14-SNAPSHOT.jar
</code>
</pre>
</div>

##### 8. Configure Gerrit
<div class="card">
<pre class="language-bash">
<code class="language-bash">
cd /home/gerrit
sudo java -jar gerrit*.war init
sudo java -jar gerrit*.war reindex
cd /home/
sudo chown -R gerrit:gerrit gerrit
</code>
</pre>
</div>

##### 9. Gerrit sample config files
1. [Gerrit config](https://gist.githubusercontent.com/FireLord1/350dba5935e112942fbdbc2e45774fd5/raw/91f04991a995776881e30930c3f9d4d4955452e2/Gerrit%2520sample%2520config)
2. [All-projects part-1]({{site.url}}/assets/images/gerrit\Screenshot (9).png)
3. [All-projects part-2]({{site.url}}/assets/images/gerrit\Screenshot (10).png)