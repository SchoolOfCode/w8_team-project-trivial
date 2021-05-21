## FEATURES

# SCREEN 1

- start button

# SCREEN 2

- User name input
- Character Selection

# Screen 3

- Category selection
- difficulty selection (3 buttons)

# Screen 4

- Question
- Timer
- Progress bar
- 4 answer selection
- Name + Character

# Screen 5

- Name + Character
- score
- Gif
- Play again button
- Share

# Pseudo code Begins

# SCREEN 1

- select button from the dom
- add a eventlistener
- create the 'Start button'
<!-- - possible link local link $ -->

# SCREEN 2

Feature 1: Name input 
- select input from the dom
- set as user input
- if userInput is = to numbers  (display error message)'please only use characters'
- capitalise first letter of input (validation)
- use .focus method to automatically place cursor input field 

Feature 2: Character Selection Icons
- Add 6 buttons 
- limit the button selection to 1: if another button is selected, the first automatically unselected 

Feature 3: Confirmation Button 
- if both user input and 1 category button is selected, allow user to continue user journey
- if user input is missing, display an error message 
- if user has selected two buttons, display error message "choose 1 charcter"*  
- once user input is correct, store character selection and name in 2 seperate variables 
- attach href link to the confirm button, send user to screen 4

# Screen 3 

Feature 1: Select a Category
- add eventListener to each button "on click"
- Add 6 category buttons 
- limit the user button selection to 1: if another button is selected by user, the first selection is automatically unselected
 
Feature 2: Difficulty 
- add eventListener to each button 
- Add 3 buttons 
- limit the user button selection to 1: if another button is selected, the first button is automatically unselected

Feature 3: Let's GO! 
- add eventListener to each button "on click"
- if both user input and 1 category button is selected, allow user to continue user journey
- if user has selected two buttons, display error message "choose 1 category"*  
- if all necessary infomation is present, check the catagory name, and store as variable , check the difficulty selection and store as variable
- fetch api  

# Screen 4

Feature 1:Character and Name Display 
- Calls the stored chracter and Name variables and displays it in the top left corner, display this until triggered by a change in variables from screen 2

Feature 2: Progress Bar
- needs to listen/track number of questions completed and change the display to reflect this 

Feature 3: Question Display
- Fetching 10 questions, and using a loop, loop through each question in the array, displaing 1 at a time

Feature 4: Timer * fancy future feature

Feature 5: Answer Box 
- create 4 buttons 
- the answer object will always go in in the same box and using the splice/push method randomise the order it appears 
- incorrect answers always appear in the same buttons. (data operator?)
- track the score and save it to the score variable 

Feature 6: Score display * fancy futre feature

# Screen 5

Feature 1: Score Display 
- Calls the stored variable and displays it in the middle upper screen


Feature 2: Name and Character 
- Calls the stored chracter and Name variables and displays it next to score displau
- resent function when the user plays a new game

Feature 3: GIF Display 
- if the user score is above 8-10, cue excited mood variable, if between 5-8 cue good job variable, if 3-5 lame job variable, 3-0 RUBBISH variable, 
- fetch and disaply GIF according to variable 

Feature 4: Play Again 
- create button that links to screen 3 
- reset all selections 

Feature 5: Shareable Buttons * fancy future feature 