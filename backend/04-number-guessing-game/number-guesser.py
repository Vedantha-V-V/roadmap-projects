import random
import time

print("Welcome to the Number Guessing Game!\n" \
"I'm thinking of a number between 1 and 100.")

game_loop = True

try:
    print("\nPlease select the difficulty level:\n" \
        "1. Easy (10 chances)\n" \
        "2. Medium (5 chances)\n" \
        "3. Hard (3 chances)\n")
    while(game_loop):
        success = False
        start = time.time()
        choice = int(input("Enter your choice:"))
        if(choice == 1):
            chances = 10
            print("Great! You have selected the Easy difficulty level.")
        elif(choice == 2):
            chances = 5
            print("Great! You have selected the Medium difficulty level.")
        elif(choice == 3):
            chances = 3
            print("Great! You have selected the Hard difficulty level.")
        else:
            raise Exception

        target = random.randint(1,100)
        print(target)
        print("Let's start the game!\n")
        for i in range(1,chances+1):
            guess = int(input("Enter your guess: "))
            if(guess == target):
                success = True
                end = time.time()
                print(f"Congratulations! You guessed the correct number in {i} attempts.")
                print(f"Time taken to guess: {(end - start):.2f} seconds")
                break
            elif(guess>target):
                print(f"Incorrect! The number is less than {guess}.\n")
            else:
                print(f"Incorrect! The number is greater than {guess}.\n")
        if(not success):
            print("Game Over!\n")
        res = input("Do you want to play again?\nEnter yes or no: ")
        if(not res.__eq__('yes')):
            game_loop = False
except:
    print("Invalid input entered.")