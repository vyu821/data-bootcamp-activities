import os
import csv

# variable to hold the file
ratings_file = os.path.join("..", "Resources", "netflix_ratings.csv")

# variable to hold user input
video = input("What show or movie are you looking for? ")

# variable to check if video is found
found = False

# opens file as a csvfile
with open(ratings_file, newline = '' ) as csvfile:
    # variable to hold the read csv file
    csvreader = csv.reader(csvfile, delimiter = ',')

    # goes through each row in csvfile
    for row in csvreader:
        if (row[0] == video):
            rating = row[1]
            score = row[6]
            print(video + " is rated " + rating + " with a rating of " + score)

            # set variable to confirm we have found video
            found = True
            
            # breaks loop after first result
            break

    if found is False:
        print(video + " could not be found.")