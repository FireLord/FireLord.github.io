---
title: How to make device manifest
layout: post
featured-img: xml.png
cardcolor: light-green  darken-2
youtubelink: https://www.youtube.com/embed/dQnhdLxVfjc
---
### What is device manifest?
Its a simple xml based file, the repo tool reads it and clones the repos inside it.

### Basic structure of manifest
<div class="card">
<pre class="language-html">
<code class="language-html">
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;manifest>
     &lt;project name=""  path=""  remote=""  revision="" />
&lt;/manifest>
</code>
</pre>
</div>

### Where to paste this?
<div class="card">
<pre class="language-bash">
<code class="language-bash">
cd android/roms/los-n/
mkdir .repo/local_manifests/
</code>
</pre>
</div>