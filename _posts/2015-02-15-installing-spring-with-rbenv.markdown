---
layout: post
title:  "Installing Spring with Rbenv"
date:   2015-02-15 19:10:28
categories: ruby, rbenv, spring
---

Recently I was restoring my development environment. And I think it's time to change something. So I moved from [rvm][rvm] to [rbenv][rbenv], removed all my gemsets, saved about 12Gb of disk space, and let [Bundler][bundler] resolve my gems dependensies.

But not all was going well. I catched an issue with spring on fresh install ruby 1.9.3. I know that 1.9.3 is out of [support][ruby-1.9.3-support] but my customer don't want to upgrade.

So what I had:

{% highlight bash %}
lib/spring/sid.rb:17:in 'fiddle_func': uninitialized constant Spring::SID::DL (NameError)
{% endhighlight %}

And how to fix this for [ruby-build][ruby-build]:

{% highlight bash %}
ruby-install -p https://gist.githubusercontent.com/caius/10452604/raw/acd421a8461f4d776a8f752663db19e321f850e0/ext_dl_extconf_rb.patch ruby 1.9.3-p551
{% endhighlight %}

And for rbenv:

{% highlight bash %}
rbenv install --patch 1.9.3-p551 < <(curl -sSL https://gist.githubusercontent.com/caius/10452604/raw/acd421a8461f4d776a8f752663db19e321f850e0/ext_dl_extconf_rb.patch)
{% endhighlight %}

Thanks to amazing issue [comment][issue-comment]. I just want to share this with you.

Thats all I have. Later.

Updated:
And for now this issue should be [fixed][issue-fix].

[rvm]:                http://rvm.io
[rbenv]:              http://rbenv.org
[bundler]:            http://bundler.io
[ruby-1.9.3-support]: https://www.ruby-lang.org/en/news/2014/01/10/ruby-1-9-3-will-end-on-2015/
[ruby-build]:         https://github.com/sstephenson/ruby-build
[issue-comment]:      https://github.com/rails/spring/issues/274#issuecomment-40185955
[issue-fix]:          https://github.com/rails/spring/pull/357
