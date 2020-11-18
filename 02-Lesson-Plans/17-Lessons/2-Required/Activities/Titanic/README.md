# A Titanic Endeavor

## Instructions

In this activity, you will combine much of what you have learned about supervised machine learning. Your specific task is to build a model that best predicts survivors aboard the Titanic.

In order to accomplish this task, you'll need to perform four tasks:

1. Data preprocessing
2. Build a model
3. Compare various models
4. Tune hyperparameters

### 1. Data Preprocessing

* Encode textual columns into numerical data, as necessary.

* Split the data set into independent (X) and dependent (y) variables.

* Split the data into training and testing sets.

* Scale the data.

### 2. Build A Model

* In this task, you will build a model: create a model and make predictions.

* Build a decision tree classifier model.

* Assess its performance with `classification_report`.

### 3. Compare Models

* In this task, you will compare the performances of four machine learning models: decision tree classifier, random forest classifier, logistic regression, and support vector machine.

* Create an instance of each model, and use the following parameters:

  * logistic regression: `solver='lbfgs'`, `max_iter=200`, `random_state=1`

  * SVM: `kernel='linear'`

  * random forest classifier: `n_estimators=128`, `random_state=78`

* Create a Python list of the model instances.

* Use a for-loop to iterate through the model instances.

* In each iteration, train, predict, and validate.

* Print the classification report for each model.

* Identify the model(s) that yield the best results.

### 4. Hyperparameter Tuning

* In this task, you will optimize the `n_estimators` parameter of the random forest classifier.

* Create a Python list of the following estimator values: 10, 20, 50, 100, 150, 200, 250, 500, 1000

* Use a for-loop to iterate through these values.

* During each iteration, instantiate a model with the estimator value. Then train, predict, and validate.

* Print the classification report for each model instance.

* Identify the `n_estimator` value(s) that yield the best results.

© 2020 Trilogy Education Services, a 2U, Inc. brand.  All Rights Reserved.