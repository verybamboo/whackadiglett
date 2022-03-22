# Whack-A-Mole
Project 4: Whack-A-Mole (Diglett)

# Overview
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1178" alt="screenshotWAD" src="https://user-images.githubusercontent.com/57966235/159417760-b0d83ef7-e795-4a94-bbef-2a9828bc61b4.png">

Simple game of whacking moles(digletts) using javascript, css and html that I've learned thus far.
This is purely a project for practicing my own skills and not meant to be monetized or sold. 

It will be an interesting venture into seeing how far my skills have come.

# Description
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
I made this project as a fun off shoot based off of the original Whack-A-Mole game using Digletts(which are pokemon that were created as a parody of moles from Whack-A-Mole). The game has different types of Digletts that appear at random times at a random hole and will stay on the board for a random amount of time as well. The game is currently only a little above MVP and I plan to add more features or fix existing issues as I learn the skills needed. 

# Game requirements
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. A grid for the moles to be on. 3x3, 4x4, 5x5
2. Moles popping their heads up and back down. This will require adding classes between a dirt mound and the moles head. 
3. On-click of the mole will result in earning points and making the mole go back underground.
4. A score tracking system after hitting moles.
5. Randomize the amount of moles that pop up, the intervals of time for them popping up and the moles will only be up for a certain amount of time.
6. A timer for how long the round is.
7. A high score tracker.

Extras if possible:
1. Increasing speed of moles popping up and going down.
2. Different kinds of moles (some worth more points or some that will lose you points).
3. Storing highscore values locally that persists even if page is reloaded.

# Instructions
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Press the Start Game button.
2. "Whack" any of the types of Digletts or Dugtrios that appear by hovering the hammer cursor over them and then clicking.
3. Avoid "whacking" any Pikachus as they take away points.
4. Earn as many points as possible in 60 seconds.

# Thoughts and Approach
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
I initially set out to create a simple 1 pop-up, mole game but eventually as I went on with my thought process, why not create one where there are multiple types of moles popping up, each worth different amounts of points. Then ontop of them showing up at random times, they also stay for random durations. This allows for a hectic style of gameplay. With all these different moles popping up, each worth different points, staying for different times, the player has to choose quickly which moles to go for to earn the most amount of points. I also added a type of mole that takes away points should you "whack" it by accident, creating even more situations for the player to make the right choice quickly.


# Unsolved issues
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Pressing the start button will run multiple instances of the game simultaneously. FIXED.
2. If you "whack" moles too fast, faster than the game can track, the score will return a NaN.
3. Slight CSS movements that change
4. I was able to make it so that a mole will not show up in a hole that already had a mole previously but once I started added multiple types of moles, I was unable to make it so that two moles won't show up in the same hole.
5. High score is lost when page is refreshed.

# Technologies Used
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. CSS animations
2. Custom cursors
3. Custom Fonts

# Disclaimer
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

Disclaimer: This game was made solely for fun and will not be sold or monetized. If needed, images and themes used can be changed or taken down.

Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.

Fair use is a use permitted by copyright statute that might otherwise be infringing. 

Non-profit, educational or personal use tips the balance in favor of fair use. 
