---
title: How to speed up rom compilation
layout: post
featured-img: speed.png
cardcolor: brown  darken-2
youtubelink: https://www.youtube.com/embed/zwGDz_Sn7YQ
---
### What is ccache?
You can optionally tell the build to use the ccache compilation tool. Ccache acts as a compiler cache that can be used to speed up rebuilds. This works very well if you use make clean often, or if you frequently switch between different build products.

##### 1. Open .bashrc to set cache export
<div class="card">
<pre class="language-bash">
<code class="language-bash">
cd
gedit .bashrc
--- At last of bashrc file---
# ccache
export USE_CCACHE=1
</code>
</pre>
</div>

##### 2. Go to your rom folder & paste the following
<div class="card">
<pre class="language-bash">
<code class="language-bash">
cd android/roms/los-n (example rom folder)
prebuilts/misc/linux-x86/ccache/ccache -M 50G (for linux)
prebuilt/linux-x86/ccache/ccache -M 50G (for Mac OS)
</code>
</pre>
</div>

##### 3. Now enable it
<div class="card">
<pre class="language-bash">
<code class="language-bash">
source ~/.bashrc
</code>
</pre>
</div>