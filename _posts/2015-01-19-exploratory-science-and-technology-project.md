---
layout: post
title: Exploratory Science and Technology Project
Date: 2015-01-19
categories: articles
tags: education learning experiments potato
css: articles/est.css
---

<img  src="/images/posts/exploratory-science/open-pit-caution.png" class="centered can_shrink" alt="Caution" width="350px"/>

I received an email late last week:

> ... I was inquiring to see if you would be able to find time either once a week or once every other week to explore and teach the boys some technology skills. Our schedule is flexible and I was thinking for about an hour. (I can pay you too. Or at least double a recipe to give your wife a night off from cooking!)

This was sent to me by a family friend, with two middle school boys. Neither parent are tech-oriented, so they asked if I could help[^workout]. This is an incredible opportunity! Naturally I jumped at the chance to do _experiments with them._

# So about those “Technology Skills”…

This is quite a broad phrase.

The definition I'll be using – practical, experimental approach to becoming familiar with principles of **electricity** and basic **circuits**, simple **physics[^physics]**, and an introduction to **programming.**

I am looking forward to solidifying my understanding of the first three and working on my ability to introduce people to the fundamentals of writing software.

## A Smattering of Ideas

I have been racking my brain and my [coworkers'](http://product.voxmedia.com) to come up with something that would be a semester long "technology skills" project for a fifth and a sixth grader.

After trying to recall the interesting things I did in Middle School, High School and College, in addition to all the great suggestions from my brilliant coworkers at [Vox Media](http://voxmedia.com), we came up with this list:

<img src="/images/posts/exploratory-science/hands-warning.gif" class="right can_shrink" alt="Caution" width="250px"/>

* Paper airplanes, longest flight, highest distance, ...
* Geo caching, with some DIY technology twist.
* Rockets, using an arduino for telemetry data
* Catapult and Trebuchet, classics!
* [Spaghetti bridge](https://www.google.com/search?q=spaghetti+bridge&espv=2&biw=1102&bih=740&source=lnms&tbm=isch&sa=X&ei=6N69VOuQOY7bsAS4yIDQCQ&ved=0CAYQ_AUoAQ)
* Egg drop in cardboard
* Arduino powered weather station, Iowa has some great weather.
* Legos (including [MindStorm](http://en.wikipedia.org/wiki/Lego_Mindstorms_NXT#Programming) and the excellent [FLL Robotics programs](http://www.usfirst.org/roboticsprograms/fll))
* [RetroPie Project](http://blog.petrockblock.com/retropie/) turning the Raspberry Pi into a retro-gaming console.

# The Project – Spudnik

I needed to find a project that would be interesting to middle school boys, so I gravitated toward explosions and projectiles. [^boom]

After thinking about this over the weekend, I've settled on a progressive buildout of a **pneumatic potato gun**. Each section[^time-line] we will read, discuss and _hopefully_ build an experiment to explore the concepts.

The buildout contains six main sections with an introduction and a stretch goal if we all still like each other at the end of this project. Some of these sections will be accomplished in one meeting, others might take a month to get through. [^pace]

### Key Concepts:

1. Refresher on the **[Scientific Method](http://en.wikipedia.org/wiki/Scientific_method)** – Question, Hypothesis, Prediction, Testing.
2. **Physics of Compressed Air** – [Pressure](http://en.wikipedia.org/wiki/Pressure), how does that potato fly so far?
3. **Basic Electronics** – [Series and Parallel circuits ](http://en.wikipedia.org/wiki/Series_and_parallel_circuits). Building a solenoid based ([Electromagnet](http://en.wikipedia.org/wiki/Electromagnet) triggering mechanism.
4. **Gravity and Trajectory** – Will this potato hit that house over there? Understanding [gravity](http://en.wikipedia.org/wiki/Gravitation) and calculating [trajectory](http://en.wikipedia.org/wiki/Trajectory).
5. **Programming** – Introduce basic programming concepts and build a trajectory calculation application.
6. **Sensing and Circuits** – Connect a digital pressure sensor and [accelerometer](http://en.wikipedia.org/wiki/Accelerometer) to get quantitative values to improve trajectory prediction.
7. **Programming With Hardware** – Connect the  pressure and orientation sensors to an [arduino](http://www.arduino.cc/) and use the live data to determine the spud's flight time and distance.
8. **Motorized Tripod** – If we still have time after we cover all the topics above we can combine everything we've learned to build a two axis motorized tripod that allows for pitch and yaw control. It would be arduino controlled and allow precise targeting and firing control.

_Huge thank you to [@keving1977](https://twitter.com/keving1977/status/557182766765596673) for coming up with the name **Spudnick**, and then [@regentscholar](https://twitter.com/regentscholar) tweaking it to **Spudnik**._

## The Meta Project

<img src="/images/posts/exploratory-science/multiple-power-sources.png" class="left can_shrink" alt="Caution" width="200px"/>

I am going to _try_ and journal the progress of our small “Technology Skills” _(TS)_ club and the development of our project right here on this site.

I have created a (currently empty) [Spudnik repository](https://github.com/banderson623/ProjectSpudnik) on GitHub to contain each week’s lesson. I would love to write this lesson before I meet with the group, but I am guessing, and based on my past projects, I’ll procrastinate and end up writing the lessons after we try them.

I am dog fooding my own [Educational Repository](/articles/2014/04/01/educational-repository-idea/) proposal.

&mdash; [@banderson623](http://twitter.com/banderson623) _(Please get in touch if you want to contribute.)_

[^workout]: For full disclosure, this family has a full on gym in their basement and have opened it up to anyone in the community who wants to work out. They patiently train a lot of flabby people – so this is the least I could do.

[^physics]: Let’s be honest here, this is about all I understand of physics anyway.

[^boom]: I love this stuff too – so it is a natural fit.

[^time-line]: I am not sure how long each section will take. I suppose that some sections can be accomplished in a week, some will take multiple weeks. I really don’t know what to expect here. There are some ideas that are complex, and others that are simple. But even with simple ideas, an experiment or build-out can take a lot far longer than 90 minutes I’ve allotted for each session.

[^pace]: I'd rather the pacing be dictated by their appetite and curiosity than an predetermined schedule.