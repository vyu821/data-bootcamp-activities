# Case Study

Auto MPG Data Set

https://archive.ics.uci.edu/ml/datasets/auto+mpg

This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University. The dataset was used in the 1983 American Statistical Association Exposition. 

Todays class will be a case study working for Analytical Motors, a vehicle manufaturer. Our goal is to analyze historical vehicle data to help the engineers create a model to predict Miles Per Gallon (MPG) through simulating different configurations. This will help to determine the parameters of the next vehicle to be made.

### 1. Instructor Do: Import and Explore

* The goal of todays analysis will be to import, preprocess, and predict the dataset of vehicle information using Neural Networks to estimate the MPG of a new vehicle configuration. 

### 2. Student Do: Clean the Data

* To analyze our data we will need to perform some cleaning to ensure our fields are the correct data types and our resulting dataframe only includes fields to be utilized.

### 3. Everyone Do: Encoding the Categorical

* During our cleansing we will convert the integer orign values to strings because they represent categories. Now we need to create new features usings integers to represent the category for each record.  

### 4. Student Do: Train Test Split & Describe

* To develop and test our model we will need to separate our data into training and testing data. Additonally we should take this time explore our dataset statistically to determine if here are any relationships that will benefit our analysis. 

### 5. Everyone Do: Basical Neural Network

* It's time to build our first model and see if we can make successful predictions with our dataset provided. This will lay a foundation for all of our neural network we can build upon. 

### 6. Instructor Do: Data Standaradization

* Although our previous model will work, it will have a lot of room for improvement. One of the most common preprocessing steps is to stanardize our data by scaling. Let's see if scaling our training data can provide a more accurate model.

### 7. Student Do: Normalized Neural Network

* With our scaled data we can create a basic neural network to test if our data preprocessing will make a measurable difference.

### 7. Everyone Do: Deep Neural Network

* Our standardization will improve our metrics greatly, let's see if using a deep neural network can provide a similar improvement in our results. 
