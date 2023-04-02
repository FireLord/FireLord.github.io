---
title: "How to Setup Gerrit"
date: 2018-05-24T11:47:52+05:30
draft: false
youtube: https://www.youtube.com/embed/gLk88Mrwkn0
---
### What is gerrit?
Gerrit is a free, web-based team code collaboration tool. Software developers in a team can review each other's modifications on their source code using a Web browser and approve or reject those changes.(Wikipedia)<br>

##### 1. Required packages
```bash
sudo apt-get update
sudo apt-get install openjdk-8-jdk
sudo apt-get install gitweb
sudo apt-get install git-review
```

##### 2. Link for gerrit and tools
a. [Google gerrit](https://gerrit-releases.storage.googleapis.com/index.html) \
b. [Gerrit Ci](https://gerrit-ci.gerritforge.com) \
c. [Gerrit group](https://groups.google.com/forum/#!topic/repo-discuss/fmHMQpN-qMQ)

##### 3. Create gerrit user
```bash
sudo useradd gerrit && groupadd gerrit
cd /home
mkdir gerrit
chown -R gerrit:gerrit gerrit
```

##### 4. Create folders in gerrit

```bash
cd /home/gerrit/
mkdir lib && mkdir plugins
```

##### 5. Setup MySQL
[MySQL Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04)

##### 6. Setup gerrit MySQL

```sql
mysql -p
CREATE USER 'gerrit'@'localhost' IDENTIFIED BY 'yourpassword';
CREATE DATABASE reviewdb;
GRANT ALL ON reviewdb.* TO 'gerrit'@'localhost';
FLUSH PRIVILEGES;
exit;
```

##### 7. Location for gerrit plugins
```bash
/home/gerrit/gerrit*.war
/home/gerrit/lib/github-oauth-2.14-SNAPSHOT.jar
/home/gerrit/plugins/github-plugin-2.14-SNAPSHOT.jar
```

##### 8. Configure Gerrit
```bash
cd /home/gerrit
sudo java -jar gerrit*.war init
sudo java -jar gerrit*.war reindex
cd /home/
sudo chown -R gerrit:gerrit gerrit
```

##### 9. Gerrit sample config files
1. [Gerrit config](/assets/doc/resume.pdf)
2. [All-projects part-1](/assets/img/gerrit/Screenshot-9.png)
3. [All-projects part-2](/assets/img/gerrit/Screenshot-10.png)