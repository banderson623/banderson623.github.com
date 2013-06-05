---
layout: project
title: Bingo!
date: June 2012
--- 

<img src="/images/projects/bingo/fans.jpg" class="centered can_shrink" alt="A couple of crazed fans" width="800px"/>

My family has hosted a superbowl party[^1] since we moved to Iowa. As our cirlce of friends grew, and more people started attending our party I realized I had three types of friends:
1. People who love football,
2. People who love food (and people) more than football[^2],
3. And a few that don't like either (all that much)

## In the beginning...

I wanted to find a way to keep people in category 3 coming and enjoying themselves. So, **I started printing bingo cards**. They were really low-fi. I used a simple Ruby[^3] script to generate HTML tables filled with football phrases and then printed them. Of course, we had prizes, you always have to have prizes if you want people to play.

<img src="/images/projects/bingo/card.png" class="centered can_shrink" alt="Football bingo card" width="800px"/>

These bingo sheets were fun and soon we did the same for our [World Cup Soccer](http://www.fifa.com/worldcup/) events too. _(I found, there are even more people in category 2 and 3 for soccer.)_

## More fun uses for bingo!

In the Summer of 2012 I had to attend a series of meetings with a few friends. The person running the meeting had a couple of funny phrases he used regularily. So my friends asked me if I would make a bingo card for the meeting. What a great idea! I updated my word list and ran the scripts. By this time we all had iPad's so I just emailed everyone the PDFs. It was **fun to text each other the status of our secret bingo sheets throughout the meeting**. After one of the meetings [David Dear](http://setwise.com/about/) suggested that I should built a webapp to play on the iPad. Now this was an even better idea! 

## Experimenting

I was looking for a project to experiment with a web application that ran _disconnected_ on the client side, it only communicated with the server through short HTTP API calls using [JSON](http://www.json.org/). [Backbone.js](http://backbonejs.org/) was hip and I was curious to experiment with a decoupled client/server architecture.


I quickly whipped up a little sample javascript 

I had identified four basic entities the game would need:
1. **Player** &ndash; someone who has been invited to play 
2. **Board** &ndash; A players arrangement of words in a grid
3. **Play** &ndash; an action a player took. (checking off a word)
4. **The Game** &ndash; The list of players, their boards and plays. This contained the list of words available for the game.

<img src="/images/projects/bingo/debate.jpg" class="centered can_shrink" alt="Republican debate online" width="800px"/>


[^1]: You can see two of them in this image I used to promote the party. On the left is Packer's fanatic [Brandon Kleinke](https://www.facebook.com/people/Brandon-Kleinke/16930497) and the right is [Aaron "The Steel" Eischeid](https://twitter.com/aeischeid). _A slight bit of photoshopping to correct for lighting._

[^2]: That's my category.

[^3]: The original Ruby script available as a Gist &ndash; [bingo.rb](https://gist.github.com/banderson623/5685178)