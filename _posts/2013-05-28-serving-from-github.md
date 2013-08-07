---
layout: post
title: Hosting with Github Pages
Date: 2013-05-28
categories: articles
tags: nerd
--- 
<img src="/images/posts/jekyll+github.png" class="centered can_shrink" alt="Jekyll and Github logos" width="450px"/>

For various reasons, that I might write about later, I decided I needed a place to *live* on the web[^1]. I wanted a place to write about nerd topics, life, education, parenting, philosophy and other topics that interest me. I also wanted a place to write about some of my [dorky](https://github.com/banderson623) [half-baked](https://github.com/banderson623/KeynoteKeyFramer) [projects](https://github.com/banderson623/slideo). A friend of mine asked me how I am hosting this site, so I thought I would explain my setup.

# Use Jekyll

[Jekyll](http://jekyllrb.com/) is a _"a blog-aware, static site generator in Ruby"[^2]_ that allows you to define simple templates and content in [markdown](http://daringfireball.net/projects/markdown/). 

It is easy to [install and get up and running](http://jekyllrb.com/docs/installation/).

{% highlight bash %}
  ~ $ gem install jekyll
  ~ $ jekyll new my-site
  ~ $ cd my-site
  ~/my-site $ jekyll serve
  # => Open http://localhost:4000
{% endhighlight %}

They have fantastic [documentation](http://jekyllrb.com/docs/home/) that explains the directory structure, built in functions and configuration. 

# Use Github

The site is *freely* stored and *freely* hosted at [Github](http://github.com). Using [Github Pages](http://pages.github.com/) you can host one of [your repositories](https://help.github.com/articles/user-organization-and-project-pages) as a website. Each time you push your code to the repository, the site is statically generated. Their [documentation](https://help.github.com/categories/20/articles) will get you up and running quickly. I followed the [instructions that explain how to use Jekyll](https://help.github.com/articles/using-jekyll-with-pages) to host your Github Pages site.

The basic steps are:

1. Create a repository named <tt>&lt;your-github-username&gt;.github.com</tt> 
2. Place your Jekyll-created directory structure in this repository. (Ignoring the contents of the <tt>_site/</tt> directory)
3. Your newly created site will be available at <tt>http://&lt;your-github-username&gt;.github.io</tt> _(after you commit and push your code)_


# Custom Domain
If you are hosting from a custom domain name[^3], you will need to configure your DNS records and add a CNAME file to your repository.

1. You should have an A record pointing to <tt>204.232.175.78</tt> in your DNS configuration at your Domain registrar (or dns provider).
2. Add a file named <tt>CNAME</tt> to the top level of your repository, with a single line containing the name of your custom domain. You can [view my CNAME file](https://github.com/banderson623/banderson623.github.com/blob/master/CNAME).



# A few more things...

I am using the excellent [Zepto.js](http://zeptojs.com/), _"minimalist JavaScript library for modern browsers."_ It is a small library written by [Thomas Fuchs](https://github.com/madrobby). The same person who created one of the first-generation javascript libraries &mdash; [script.aculo.us](http://script.aculo.us). It allows for simple animations that leverage CSS3's animation constructs.

I generate RSS feeds based on the [templates](https://github.com/snaptortoise/jekyll-rss-feeds) provided by [Snap Tortoise](http://snaptortoise.com/open-source.html).

I've use the beautiful [Proxima Nova](https://typekit.com/fonts/proxima-nova) font from  [TypeKit](https://typekit.com/).

If you get stuck you can this site in my [public github repository](https://github.com/banderson623/banderson623.github.com).

[^1]: I started out thinking I would host it on [SquareSpace](http://www.squarespace.com/), but the tinker-er, in me wanted more control over every silly detail.

[^2]: I first explored Jekyll two years ago while building an offline  magazine viewer. A company had contacted a friend and I about replacing their flash-based DVD magazine archive with HTML. We wrote a boat-load of HTML and javascript running inside of Mozilla's, now defunct, [Chromeless project](https://mozillalabs.com/en-US/chromeless/). It was a fun project. Maybe someday I'll post the source code.

[^3]: I'd highly recommend using [Hover](http://hover.com) to register your domain name. They make it very convenient to register and configure a domain.