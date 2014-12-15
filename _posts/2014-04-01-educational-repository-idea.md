---
layout: post
title: Education Repository Idea
Date: 2014-04-01
categories: articles
tags: education learning github
---

TL;DR – Is there value in having a collection of lessons from educators from different schools and different grade levels? This collection would encourage open sharing and collaborative-iterations on lessons for different grade levels. If this sounds even remotely interesting read on. I’ve tried to outline how this could work.

---

I am on a committee who is interviewing candidates for a new position in the Gilbert schools. One of the new positions includes this in their job responsibility: _"Facilitate the creation and maintenance of a repository of exemplar lessons and classroom-instruction videos."_

When I read this line a lightbulb turned on in my small-brain. Because the word "repository" has a special meaning in the programming world. It refers to a place to store source code that permits collaboration. It permits many people making changes to the software with tools to manage conflicts and preserve revisions. In the case of "open source software", these repositories are open to the public. Everyone is able to view and comment on every line of code. There are also ways to integrate and pull in changes to the source code.

So then I thought, can we take this same idea and create parallel system for storing lessons, curriculum, resources for educational purposes? What can we learn from the software-development-world that would be applicable to storing and sharing lessons with others?

I have taken the generic software developer workflow and tried to apply it; to this one line on a job description. And yes, I was showering when I was thinking of this. Instead of software projects and source code, we would have educational-projects (that would include: rubrics, slides, assignments, activities, videos, quizzes, tests, ...etc.) that could be shared via a repository:

* Collecting all the resources used in a lesson.
* Capturing fellow educator's comments on parts or all of the lesson, a discussion around the lessons
* Submit ideas to improve the lesson (We call these feature requests or bugs when talking about software)
* Save revision history (both to demonstrate progress or revert a change)
* Allow for branches & merging (described below).
* Allow for people to fork the lesson (also described below)
* Allow for others to issue pull requests (yep, described below)

I used three phrases you might not be familiar with. Let me explain them:

## Branches
this would be like "save as" where you can make a modification of this work without impacting the original. You can experiment with and idea, if it is good you can merge it back in. The end goal is that you can experiment and try out different ideas without fear of corrupting or ruining your original idea. (Think of it as unlimited undo/redo matrix).

## Fork
If I log in and see that Tom has a great lesson that explains the US Constitution to his students. Maybe he had a slide deck, a few videos and a writing assignment. I like it, but need to adapt it to work in the middle school context. So I fork his lesson; that is I make my own copy of it (with a link back to his original work). Now I am able to adapt it to my middle school needs. The link back to Tom's original is excellent because, say Tom updates his work for the next semester with a better video, I can easily flow his changes downstream into my forked version . This allows for custom modifications while also allowing for consistency between large parts of the lesson. (Maybe this is mildly related to the education phrase: “differentiation”)

## Pull Request
Using this same US Constitution lesson say that I have designed a neat activity for my students and I think Tom might want to also use it. I can make a  pull request to Tom's original lesson. This is basically a formal way to request my changes be merged back into Tom's original (or upstream) lesson. The pull request would include a description of what is changes and and discussion between him and I (and others). Tom decides that my changes are relevant to his college class too so he decides to approve my changes and merge them into his lesson.

What I described is exactly how we work at [Vox Media](http://voxmedia.com). And how nearly all modern software development projects work. This flow allows teams to communicate, collaborate and manage many people using, reusing and changing the code in a complementary method.

You can read more about this at a Tech Crunch article: [What Exactly is Github Anyway](http://techcrunch.com/2012/07/14/what-exactly-is-github-anyway/) which highlights one of the major open source repository hosts: [Github](http://github.com). They also probably do a better job explaining some of the more complex ideas of source code management.

There has been a lot of time spent on figuring out how students can access content online, I am curious if we are spending equal time figuring out how educators can share and improve each other's lessons.

I think the idea becomes more exciting as the network grows, this is well articulated in the article I linked to above:

> "This is where the network effect starts to play a role in GitHub, Pollack explains. When you submit a pull request, the project’s maintainer can see your profile, which includes all of your contributions on GitHub. If your patch is accepted, you get credit on the original site, and it shows up in your profile. It’s like a resume that helps the maintainer determine your reputation. The more people and projects on GitHub, the better idea picture a project maintainer can get of potential contributors. Patches can also be publicly discussed."

You begin to build a vibrant community that is geared toward **collaboration and open sharing** &mdash; pretty cool! Each person building up the community while they are also building their own reputation.

##Curious

* Does something like this exist?
* If it does exist, would educators use it?
* If not, would this be something of value?
* Are lessons, resources and goals common enough between classrooms that there would be benefit sharing them?

I hope this makes sense and, as always, I would enjoy your feedback.

&mdash; [@banderson623](http://twitter.com/banderson623)