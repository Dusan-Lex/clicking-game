# React Engineer task 

## Clicking - Game 

This is a react task that I received from a software company in Serbia to enter the selection process. 

This is how I solved that task with react, typescript and redux.


Live : https://clicking-game.vercel.app/

## Brief
The purpose of this document is to explain the step-by-step requirements for your
front-end engineer task.

In this document, you will find task requirements, videos with real examples and images
with instructions.

It is not required to complete all parts of this task but only those marked as mandatory.
Every additional completed part will only increase your chances of success.

Also, it is possible that we may request the completion of the remaining tasks following
your technical interview, to assist our selection process.

The main purpose of this task is to assess your abilities in creating a full project from zero
to functional usage while enjoying the experience.

We will rate your code style, your overall programming logic, algorithms and execution of
user-facing UI/UX.

Having fun with this task is a must!

## Task expectations and requirements

You are obliged to complete only tasks marked as “required”. Each of the tasks will be
further explained in the rest of this document. If some parts have additional
requirements, they will be detailed in the individual task descriptions.
Bonus items are not mandatory to complete in the first phase of the test, but could be
requested further along the selection process. Of course, if you do decide to complete
all items, this will only increase your chances of success.
In order to execute this task, there are some requirements that must be met:
1. The task must be completed using Redux and React or React-native, depending
on the position you have applied for.
2. Mandatory use of ES6+
3. Game board and interface must be responsive and work on all major browsers for
both mobile and web devices. Do not fix board size. It should always take maximal
visible space. (Apply only for React web version)
a. Chrome/Firefox/Safari - Latest versions
4. In case of React-native development, the game is not required to work on both
Android and iOS.
5. Submitted code must have readme instructions; “How to install this game” or in
case of React-Native “How to build this game”
6. There is no need for any kind of server development in this task.
You are permitted to use additional libraries you may find useful to complete this task

## Task content
1. Game (Required)
2. Game stats (Required)
3. Level picker (Required)
4. Top score (Bonus)
5. Choose player (Bonus)

The ‘top score’ feature will have different requirements if you decide to complete the
‘choose player’ feature initially.
The ‘level charts’ feature requires the ‘top score’ feature to be completed first

## Task description

### The main task - Game

Player has a board of 10*10 boxes. When a player clicks on an empty box in the board, a level is generated and boxes that the player can click on are shown. The number of
boxes the player can click is defined by the current level. To complete a level, the player
must click on all generated fields in a specific order. The player cannot click random
fields, they can only click fields that pass a specific rule set by the game.
Each new level will have one more box than the previous level.
To complete the whole game, the player must finish all 99 levels.

Game video example: https://www.useloom.com/share/9e6faa666695432687a8287606559d51 

The main task of this test is to build a game shown in the video above.
In order to be successful in this task, you must create a resizable game board and an
algorithm that will generate levels to level 99.
The first click will define the player’s start position; the starting point from where the
game will need to build a new level of clickable fields.
After the first click, the player can only click on available fields by following the rules of
movement. The player can click on any box in the specific range from the previously
clicked box.

#### Lives
Whenever the player completes a level they gain a life.
Whenever the player fails to complete a level, they lose a number of lives equal to the
number of unclicked boxes in that level.
The player can then choose from which level he will start a new game as long as he has
completed that level.
His lives are active even after the player refresh or close tab/browser.
When he reaches zero lives, he starts from level 1 again.

#### Movement rules
You can move not more or less than three fields vertically and horizontally, or you can
move not more or less than two fields diagonally.
Please see the photo and video below for more details about how the player can move.

![React-task-000](https://user-images.githubusercontent.com/76923419/153729802-7ebf59fa-6c4d-435f-b91e-ff8863c284a1.png)

Please see this video to understand how this works in real usage.\
https://www.useloom.com/share/4055fcfbda19446e8efdc227b746e2c2 \
NOTE: This video only shows how movement rules work.

#### Level generator
In the video above you can see how we can manually build levels by following movement
rules.
We are expecting you to write a level builder algorithm, which will build the level for the
player playing this game and follow the same movement rules.
A level is built from the box where the player has clicked first.
Each level will generate a number of clickable boxes equal to the level number.
Additional video showing a functional game example with a few levels:
https://www.useloom.com/share/9a9fcad526c04a46888cdbc16c374401

### The main task - Game stats
As in every game, there are some essential stats to show the player.
In this game, we have 4 stats:

- Timer - Shows how much time has passed since a level has started
- Fields left to click - Number of fields left to click
- Lives - Number of lives
- Level - Shows which level the player is on

![1](https://user-images.githubusercontent.com/76923419/153729996-23bba5a1-1f3b-404e-863a-0190547e93c0.jpg)


### The main task - Choose level
Whenever a player returns to the game (after closing a tab or browser), they should be
able to choose a level from where they would like to start a new game.
The maximum level a player can choose to continue from is a level above the last one
they completed successfully.
There must also be the ability to set a default start level for all players. You may use a
basic config file where you can enter for example:\
“startLevel”: 15\
The game will now start for this player at level 15 and they will not be able to play the
lower levels. However, if they have completed level 16 they will be able to start from level
17.
You are free to use any front-end tool to retain information even after closing a
browser/tab.

### Optional task - Top score
Every time the player completes a level, a new score is saved.
This is a persistent feature, meaning that even after a refresh the score is still visible to
the player in the top score list.
You are free to use any front-end tool to create persistent information.
The top score list will show the level reached, the best time it was completed in, and the
number of times it was completed.
If you complete the “choose player” functionality, the player’s name will need to be
displayed next to the times completed.

Example top score list:

![2](https://user-images.githubusercontent.com/76923419/153730050-f21cfbbd-d0ad-4893-8e63-3ec9d048d98d.png)

By clicking on the + icon, a list of additional times existing for this level will be displayed.
These times can be created by all players or by a single player (if the player is signed in)

![3](https://user-images.githubusercontent.com/76923419/153730060-7c825fab-87b6-4b49-967a-9908663e0880.png)

Requirements

- All data must be saved and available after the player closes and opens a
tab/browser.
- If you implement the “choose Player” feature, be aware of the changes the feature
will have on this task

### Optional task - Choose player

NOTE: This task will change the default behaviour of the previous task.

‘Choose player’ is a feature whereby a player can sign in with their username. We can
then remember the player’s last level, scores and relate it to their username.
Add a link somewhere at the top of the page. Clicking that link will open a popup where
the player can choose their username or create a new player.

![4](https://user-images.githubusercontent.com/76923419/153730089-537ed8e2-6907-464a-8cb1-9b3987f8f9db.png)

Adding a player will change some behaviors in this game.
- All scores created while a player is logged in will belong to that player
- Adding a player will make a top score feature to list only that player’s scores.

Also, when a player completes a level, resulting info must be stored in some type of
persistent front-end storage (e.g. local storage) to be obtainable even after the player
closes their browser/tab.

This feature will require you to also add a logout or switch player button.

When a new player is signed in, they will be able to continue from the previously
completed level.

There are no new requirements related to this task. You may complete it in any way
you find best
