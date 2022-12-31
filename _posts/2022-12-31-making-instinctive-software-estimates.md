---
categories: software-engineering
layout: post
author: Vladyslav Siriniok
title: Making Instinctive Software Estimates
date: 2022-12-31 23:01:00 +0200
image: ''
description: ''

---
I want to give you some insight in how I do my estimates. But it's a pretty substantial topic, and it would take a book to explain it properly. So please excuse me if my explanations won't sound sufficient sometimes, I will be happy to discuss those moments later. :)

My estimates are represented by two variables—**duration** and a **likelihood of success**.

In my estimation process I'm guided by three mathematical heuristics:
  - **Fermi estimates:** I only do order-of-magnitude estimates to cancel errors in single estimates. So when I say "we need 8 hours" I actually mean "we need a day or two" and when I say "we need 1 hour" I actually mean "we need 10 minutes or a day".
  - **Paretto principle (80-20):** I assume that distribution of complexity of our tasks follows the power law, therefore the least complex 20% of our tasks will take 80% of our time. 
  - **Instinctive Bayesian updating:** We can apply the Bayes' theorem to calibrate a probability of completing a project in a given timespan. But that's complicated and relies on our intuition anyway. So let's just use an alternative approach [proposed](https://www.lesswrong.com/posts/ybYBCK9D7MZCcdArB/how-to-measure-anything#Bayes) by Douglas Hubbard:
  > 1. Start with your calibrated estimate.
  > 2. Gather additional information (polling, reading other studies, etc.)
  > 3. Update your calibrated estimate subjectively, without doing any additional math.

It all may sound scary, but it's really just a formalization of the intuitive heuristics our mind uses for planning daily without even our conscious awareness. Let's see how these principles apply to our case.

First, we need to plan our project, asses the size of the scope we are dealing with, and estimate the magnitude of how long will it take us to get it done. We can get those numbers from our experience with similar projects in the past and add a 20% buffer to appease the uncertainty.

That's a nice number, but we still don't know how likely it is that we guessed it right. Estimation is essentially betting, so we need to know the odds. We also know that software engineers tend to underestimate how long they will work on a project.

What can we do about that? Let's start with some **outrageously large number** to overcorrect our bias in favor of shipping the project fast. How long will it take us to ship this project with 99% certainty? What a pessimistic manager would say? 1 year? Ughh, that's a bit too much. 1 month? Sounds a bit too low. 3 months? Huh, easy. So be it, that's our prior guess.

3 months have 160 * 3 = 480 working hours, so our estimate of 226 hours gives us only 228 / 480 = 0.48 probability of success then. We could have just flipped a coin!

So, the probability of finishing the full project in less than 228 hours is `P(A) = 0.48`.

Our second data point we will obtain from the real world, more specifically from building our PoC. Building a mini-version of our project gives us some understanding of the problem space and helps us to set more correct expectations for the rest of the project. As it "took" me 10 hours to build rather than expected 12h, we can calculate a probability of that happening: `P(B) = 10 / 12 = 0.83`.

Let's calibrate our first prediction using this new data: `P(A) = 228 / (480 * 0.83) = 0.57`. Wow, it's not that bad now.

But I actually want our project to have at least 80% chance of success. That means that we need to calibrate it to `(480 * 0.83) * 0.8 = 319 hours`. It's almost 100 hours more than our initial estimate, but also more than 100 hours less than the worst case scenario! And now we can be much more confident that we will ship the project in time.

Is 80% chance good enough? Well, we can pick a higher number, but it's almost twice as likely than our initial estimate already, so it's fine by me. The goal of these calculations is to counter [the planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy) rather than to predict the completion date.

We can repeat this process after every iteration to calibrate our estimates even better.