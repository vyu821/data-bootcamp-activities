# Module 18: Virtual Class (Required) Lesson Plan

## Overview

Today's Virtual Class (Required) lesson will provide students with refresher activities on unsupervised machine learning.

## Learning Objectives

At the end of the session, learners will be able to:

* Process data to train a K-means machine learning model
* Evaluate potential choices for k in a K-means model
* Reduce dimensionality with PCA

## Instructor Prep

<details>
    <summary><strong>Career Services</strong></summary>

    Just a reminder that each week students receive a Career Connection in their course of work that ties to what academic content is being consumed. This Career Connection relates this week's material to a professional setting, encourages students to complete certain Career Services tasks, and provides technical interviewing questions, where applicable, that the student can work through.

    Encourage students to work through this material and if you'd like more information on Career Services, please check out the Career Services [resource page](http://bit.ly/DataVizCS) for Data Analytics and Visualization.

</details>


- - -

# Class Activities

## 1. Warm Up & Temperature Check

| Activity Time: 0:10 | Elapsed Time: 0:10 |
|---------------------|--------------------|

<details>
  <summary><strong> 🎉 Everyone Do: Interview Question Warm-Up (5 mins before class, first 5 mins of class)</strong></summary>

Open the [slideshow](https://docs.google.com/presentation/d/1UEx_1Hplpu7MHY055FmLlAGd_fCqoVH7V6NwlP16dTA/edit#slide=id.g7c8f150795_0_2812) for today's class and begin the weekly presentation with the first slide. The first slide displays an interview question that a student may encounter based on the content of this week's content.

**This week's question:** What are some possible use cases for unsupervised machine learning models?

Allow the question to be on the screen 5 mins prior to the start of class as students join the session. Allow the class 1 minute at the start of class to review, then you will ask for a student to volunteer their answer to the question. Follow up with students and ask what examples they came up with. If students don't mention anomaly detection or customer segmentation, bring them up as examples before moving on.

</details>

<details>
    <summary><strong> 📣 Instructor Do: Temperature Check (5 mins)</strong></summary>

Today's session will have students perform a clustering analysis on Boston Marathon data. As such, there will be no formal poll of specific areas from the asynchronous content. Instead, take this time to have an open-ended discussion with students about clustering algorithms and unsupervised learning.

</details>

## 2. Preprocessing

| Activity Time:  0:40 |  Elapsed Time: 0:50  |
|----------------------|----------------------|

<details>
    <summary><strong> 📣 Instructor Do: Preprocessing for Unsupervised Learning (15 min)</strong></summary>

**Files:**

* [chicago_marathon_2018.csv](01-Ins_Preprocessing/Resources/chicago_marathon_2018.csv)

* [ChicagoMarathonPreprocessing.ipynb](01-Ins_Preprocessing/Solved/ChicagoMarathonPreprocessing.ipynb)

Let students know that today's session will be a guided project, using unsupervised learning on a dataset of finishers of the 2019 Boston Marathon. Tell students to imagine they've been contacted by a new sneaker start-up that wants to segment the marathon runner market. Students will use the data to first create data driven age categories of runners, and then also categorize runners further by their pace.

Since unsupervised learning is a hefty subject, you will be demonstrating similar techniques on a simpler Chicago marathon data set.

Open [ChicagoMarathonPreprocessing.ipynb](01-Ins_Preprocessing/Solved/ChicagoMarathonPreprocessing.ipynb) and step through each cell with students.

After loading in the data, point out that the data needs to be processed before any machine learning algorithm can use it. For example, the division values need to be converted from strings, the `half` and `finish` columns need to be converted to timedeltas, and we might want to extract the country information from each runner's name.

Remind students that the following code uses regular expressions to extract the country. By using `value_counts()`, we can see that there are 111 countries.

```python
df['country'] = df['name'].str.extract('\((.{3})\)')
df.head()
```

We'll take the top five countries, and label everything else as other.

```python
df['country'] = df['country'].apply(lambda x: x if x in ('USA', 'MEX', 'GBR', 'CHN', 'CAN') else 'Other')
```

Point out to students that the following code first converts `half` and `finish` to timedeltas, and then converts them to seconds.

```python
df[['half','finish']] = df[['half','finish']].apply(pd.to_timedelta).apply(lambda x: x.dt.total_seconds())
```

`division` and `country` still need to be converted to numerical values. Here, we are using the `LabelEncoder` from sci-kit learn.

```python
X = df[['half','finish', 'division', 'country']].copy()
X['division'] = LabelEncoder().fit_transform(X['division'])
X['country'] = LabelEncoder().fit_transform(X['country'])
X = X.dropna()
X.head()
```

Finally, take a moment to explain how clustering algorithms are very sensitive to how the data is scaled, so we want to make sure every feature is in the same range. For the final step of our preprocessing here, we'll use `MinMaxScaler()`

```python
X_scaled = MinMaxScaler().fit_transform(X)
```

Answer any questions students have before moving on.

</details>

<details>
    <summary><strong> ✏️ Students Do: Preprocessing (20 min)</strong></summary>

* **File:**

  * [marathon_results_2019.csv](02-Stu_Preprocessing/Resources/marathon_results_2019.csv)

  * [BostonMarathonPreprocessingUnsolved.ipynb](02-Stu_Preprocessing/Unsolved/BostonMarathonPreprocessingUnsolved.ipynb)

* **Instructions:**

  * [README.md](02-Stu_Preprocessing/README.md)

Inform students that their dataset will require slightly more preprocessing.

</details>

<details>
    <summary><strong> ⭐ Review: Preprocessing (05 min)</strong></summary>

Open [BostonMarathonPreprocessing.ipynb](02-Stu_Preprocessing/Unsolved/BostonMarathonPreprocessingUnsolved.ipynb) and step through each cell with students.

Point out that the following code converts the time stamps into seconds in two steps.
```python
time_columns = ['5K', '10K', '15K', '20K', 'Half','25K', '30K', '35K', '40K', 'Pace', 'Official Time']
df[time_columns] = df[time_columns].apply(pd.to_timedelta)

df[time_columns] = df[time_columns].apply(lambda x: x.dt.total_seconds())
```

In the step where only non-zero split time rows are kept, show students that there are multiple ways to take only non-zero rows
```python
df = df[
    (df['5K'] != 0) &
    (df['10K'] != 0) &
    (df['15K'] != 0) &
    (df['20K'] != 0) &
    (df['Half'] != 0) &
    (df['25K'] != 0) &
    (df['30K'] != 0) &
    (df['35K'] != 0) &
    (df['40K'] != 0)
]

# A more concise method
#df = df[~(df == 0).any(axis=1)]
```

The `M/F` column is a string, and so needs to be converted to integers with `LabelEncoder`.
```python
df['M/F'] = LabelEncoder().fit_transform(df['M/F'])
```

`Age` may have come in as a string, so to be sure it's a numeric value, we convert it with `to_numeric`.
```python
df['Age'] = pd.to_numeric(df['Age'])
```

Point out that part of preprocessing is doing EDA. For example, we expect that `Pace` is perfectly correlated to `Official Time`, since it's just the final time divided by the length of the marathon, but we should always check our assumptions first. A scatter plot is a quick way to see if these two features are correlated.
```python
df.plot(kind='scatter', x='Pace', y='Official Time')
```

Now we can subset our training set.
```python
X = df.drop('Pace', axis=1)
```

Finally, before we can perform a K-means algorithm, we need to scale our data. Once again, we'll use `MinMaxScaler`.
```python
X_scaled = MinMaxScaler().fit_transform(X)
```

Answer any questions students have before moving on.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2X9FpwY)</sub>

## 3. K-Means

| Activity Time:  0:35 |  Elapsed Time: 1:25  |
|----------------------|----------------------|

<details>
    <summary><strong> 📣 Instructor Do: K-means (10 min)</strong></summary>

**Files:**

* [chicago_marathon_2018.csv](03-Ins_KMeans/Resources/chicago_marathon_2018.csv)

* [ChicagoMarathonKMeans.ipynb](03-Ins_KMeans/Solved/ChicagoMarathonKMeans.ipynb)

Either open [ChicagoMarathonKMeans.ipynb](03-Ins_KMeans/Solved/ChicagoMarathonKMeans.ipynb) or work from the previous notebook, using [ChicagoMarathonPreprocessing.ipynb](01-Ins_Preprocessing/Solved/ChicagoMarathonPreprocessing.ipynb) as a guide.

Explain that the "_k_" in k-means is specifying the number of clusters to find in the data, and that the k-means algorithm will look for exactly as many clusters as we tell it to find, even if that doesn't make sense. If we don't know how many clusters we want to look for, we can try many values of _k_ and make an educated guess about the best value. One way to do that is to print the _inertia_ of each model on a line chart, and pick the point where the graph makes an "elbow".

The code to implement this is the following:

```
sse = {}
K = range(1, 10)
for k in K:
    kmeanmodel = KMeans(n_clusters=k).fit(X_scaled)
    sse[k]= kmeanmodel.inertia_

# Plot
plt.plot(list(sse.keys()), list(sse.values()))
plt.xlabel('k')
plt.ylabel('SSE')
plt.title('Elbow Method')
plt.show()
```

From this image, 3 or 4 clusters seem to be appropriate. We'll use 3 to start with. (Feel free to run through the code again, changing k to 4)

```python
model = KMeans(n_clusters=3, random_state=42).fit(X_scaled)
```

With a fit model, we can predict values.

```python
y_pred = model.predict(X_scaled)
```

To continue the analysis, we need to add the calculated clusters to our original dataframe.

```
df_y = pd.DataFrame(y_pred, columns=['Cluster'])
combined = df.join(df_y, how='inner')
combined.head()
```

One thing we can check is how the finish times are spread across the groups.

```python
combined.boxplot(['finish'], by=['Cluster'])
```

Two of the clusters seem to be fairly similar.

Finally, we can view the median finish times by division for each cluster.

```
combined[combined['Cluster'] == 0].groupby('division').median()['finish'].plot()
combined[combined['Cluster'] == 1].groupby('division').median()['finish'].plot()
combined[combined['Cluster'] == 2].groupby('division').median()['finish'].plot()
```

Again, we have similar results from two clusters. However, we get better results than if we just used `k = 2` (feel free to demonstrate this to students). Tell students we might get better results in the next activity, where we bring in PCA.

Answer any questions before moving on to the next activity.

</details>

<details>
    <summary><strong> ✏️ Students Do: K-means (20 min)</strong></summary>

* **File:**

  * [marathon_results_2019.csv](04-Stu_KMeans/Resources/marathon_results_2019.csv)

  * [BostonMarathonKMeansUnsolved.ipynb](04-Stu_KMeans/Unsolved/BostonMarathonKMeansUnsolved.ipynb)

* **Instructions:**

  * [README.md](04-Stu_KMeans/README.md)

</details>

<details>
    <summary><strong> ⭐ Review: K-means (10 min)</strong></summary>

Open [BostonMarathonKMeans.ipynb](04-Stu_KMeans/Unsolved/BostonMarathonKMeansUnsolved.ipynb) and scroll down to cell 12. Run the cell and go over the graph with students
```python
sse = {}
K = range(1,10)
for k in K:
    kmeanmodel = KMeans(n_clusters=k).fit(X_scaled)
    sse[k]= kmeanmodel.inertia_

# Plot
plt.plot(list(sse.keys()), list(sse.values()))
plt.xlabel('k')
plt.ylabel('SSE')
plt.title('Elbow Method')
plt.show()
```

Point out that `k=3` seems to be a good choice here.

```python
model = KMeans(n_clusters=3, random_state=42).fit(X_scaled)
```

With a fit model, predict the values, and add the predicted clusters to the original dataframe

```python
y_pred = model.predict(X_scaled)
```

```python
df_y = pd.DataFrame(y_pred, columns=['Cluster'])
combined = df.join(df_y, how='inner')
combined.head()
```

Go over the box plots of `Official Time` by `Cluster`, and point out that there is fairly clear division between the clusters, but we might be able to do even better by converting the ages into age groups.

```python
combined.boxplot(['Official Time'], by=['Cluster'])
```

Print out the summary statistics of ages by sex and predicted cluster.

```python
combined.groupby(['M/F','Cluster']).describe()['Age']
```

Tell students that we can use this data to create age break points, especially at the medians, but since the medians take on a relatively narrow range, we can also take the lowest 1st quartile and highest 3rd quartile as breakpoints as well.

We'll make a function with nested `elif`s and then apply them to the data frame.

```python
def age_group(gender, age):
    if gender == 0:
        if age < 29:
            return 0
        elif age < 36:
            return 1
        elif age < 41:
            return 2
        elif age < 45:
            return 3
        elif age < 51:
            return 4
        else:
            return 5
    if gender == 1:
        if age < 33:
            return 0
        elif age < 40:
            return 1
        elif age < 48:
            return 2
        elif age < 53:
            return 3
        elif age < 60:
            return 4
        else:
            return 5
```

Point out that this step could still be considered preprocessing, even though we're using a machine learning algorithm.

Answer any questions before moving on to the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2zOdWsG)</sub>

## 4. PCA 

| Activity Time:  0:35 |  Elapsed Time: 2:00  |
|----------------------|----------------------|

<details>
    <summary><strong> 📣 Instructor Do: PCA (10 min)</strong></summary>

**Files:**

* [chicago_marathon_2018.csv](05-Ins_PCA/Resources/chicago_marathon_2018.csv)

* [ChicagoMarathonPCA.ipynb](05-Ins_PCA/Solved/ChicagoMarathonPCA.ipynb)

Once again, either continue from the previous notebook, or open [ChicagoMarathonPCA.ipynb](05-Ins_PCA/Solved/ChicagoMarathonPCA.ipynb) and step through the code with students.

Point out in cell 5 that the code to convert less represented countries to `'Other'` is commented out. This is because PCA will help reduce the noise from having many more values.

We'll use `PCA` to reduce the number of components to 2

```python
pca = PCA(n_components=2)
pca.fit(X_scaled)
print(pca.explained_variance_ratio_)

X_pca = pca.transform(X_scaled)
```

Point out that like other sci-kit learn preprocessing tools, PCA uses the fit -> transform paradigm. PCA needs to fit to the data to determine its internal parameters, and after it does, it can transform a given dataset.

Note that even though there is some heavy duty math going on in the background, we don't need to calculate it because sci-kit learn has done all the hard work! Tell students that behind the scenes, PCA just used the eigenvalues and eigenvectors to create new features that more compactly describe the data. In fact, our first component accounts for 65% of the variance, and our second component accounts for 21% of the variance.

We can plot the data points on their new axes as a scatter plot

```python
df_pca = pd.DataFrame(X_pca, columns=['principal component 1','principal component 2'])
```

```python
df_pca.hvplot.scatter(
    x="principal component 1",
    y="principal component 2"
)
```

And once again, we run a k-means algorithm, using the elbow method to determine the best value for `k`.

```python
sse = {}
K = range(1, 10)
for k in K:
    kmeanmodel = KMeans(n_clusters=k).fit(X_pca)
    sse[k]= kmeanmodel.inertia_

# Plot
plt.plot(list(sse.keys()), list(sse.values()))
plt.xlabel('k')
plt.ylabel('SSE')
plt.title('Elbow Method')
plt.show()
```

Here, the elbow is more pronounced at `k=2`, so we'll look for only two clusters this time.

```python
model = KMeans(n_clusters=2, random_state=42).fit(X_scaled)
```

```python
y_pred = model.predict(X_scaled)
```

We can also redo the scatter plot, but coloring each point with what cluster it ended up in.

```python
# Add predicted values to df_pca and replot the scatter plot of the PCA components, coloring by predicted cluster
df_pca["cluster"] = y_pred
df_pca.hvplot.scatter(
    x="principal component 1",
    y="principal component 2",
    by="cluster"
)
```

Similar to before, we attach the predicted cluster back onto the dataframe, and print out the median finishing values

```python
df_y = pd.DataFrame(y_pred, columns=['Cluster'])
combined = df.join(df_y, how='inner')
```

```python
combined[combined['Cluster'] == 0].groupby('division').median()['finish'].plot()
combined[combined['Cluster'] == 1].groupby('division').median()['finish'].plot()
```

Answer any questions before moving on to the next activity.

</details>

<details>
    <summary><strong> ✏️ Students Do: PCA (20 min)</strong></summary>

* **File:**

  * [marathon_results_2019.csv](06-Stu_PCA/Resources/marathon_results_2019.csv)

  * [BostonMarathonPCAUnsolved.ipynb](06-Stu_PCA/Unsolved/BostonMarathonPCAUnsolved.ipynb)

* **Instructions:**

  * [README.md](06-Stu_PCA/README.md)

</details>

<details>
    <summary><strong> ⭐ Review: PCA (5 min)</strong></summary>


Once again, either continue from the previous notebook, or open [ChicagoMarathonPCA.ipynb](05-Ins_PCA/Solved/ChicagoMarathonPCA.ipynb) and step through the code with students.

Starting at cell 20, point out that we need to reproduce many steps, but we can just copy and paste the appropriate code. Tell students that it's still a good idea to keep all the previous code, because then the analysis can be reproduced in the final output. Inform students that many times, interviews will have a take-home project, and they will need to turn in an analysis like this for the interview.

We create a new training set, this time dropping `Age` as well, since we have our data-driven age groups.

```python
X = df.drop(['Age','Pace'], axis=1)
```

Again, we need to scale our dataset

```python
X_scaled = MinMaxScaler().fit_transform(X)
```

Using PCA, we reduce the number of components to 2

```python
pca = PCA(n_components=2)
pca.fit(X_scaled)
print(pca.explained_variance_ratio_)

X_pca = pca.transform(X_scaled)
```

We plot the new scatter plot by PCA components

```python
df_pca = pd.DataFrame(X_pca, columns=['principal component 1','principal component 2'])
df_pca.hvplot.scatter(
    x="principal component 1",
    y="principal component 2"
)
```

It looks like 2 clusters might make sense, but we'll stick with the elbow method.

```
sse = {}
K = range(1,10)
for k in K:
    kmeanmodel = KMeans(n_clusters=k).fit(X_pca)
    sse[k]= kmeanmodel.inertia_

# Plot
plt.plot(list(sse.keys()), list(sse.values()))
plt.xlabel('k')
plt.ylabel('SSE')
plt.title('Elbow Method')
plt.show()
```

This time we'll try 4 clusters.

```python
model = KMeans(n_clusters=4, random_state=42).fit(X_pca)
```

```python
y_pred = model.fit_predict(X_pca)
```

Plot the PCA scatterplot again, this time with points colored by predicted cluster

```python
df_pca["cluster"] = y_pred
df_pca.hvplot.scatter(
    x="principal component 1",
    y="principal component 2",
    by="cluster"
)
```

After attaching the predicted cluster to the original dataset, print out the boxplot of `Pace` broken down by `M/F` and `Cluster`, as well as the summary statistics. Note that in each gender, there are two clusters that overlap strongly. Ask students what breakdowns they came up with for `Pace`. Tell students that there's no one correct answer, and interpretation of results like this often requires doing the best we can from what the data gives us.

Answer any questions that students may have.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3bLuNcP)</sub>

- - -

### Challenge Instructions - Office Hours

Before you dismiss your class, let them know that the first few minutes of Office Hours will include a walkthrough of the Challenge requirements, rubric, and helpful tips to ensure they know exactly what they need in order to be successful. Encourage them to stay for this, even if they can’t stay the full length of post-class Office Hours.

<details>
  <summary><strong> 📣 Instructor Do: Challenge Instruction Walkthrough</strong></summary>

Open the Challenge in Canvas and go through the high-level instructions and requirements with your class. Be sure to check for understanding.

Open the Rubric in Canvas and go through the Mastery column with your class and show how it maps back to the requirements for each deliverable. Be sure to check for understanding.

Let them know that this challenge has **four deliverables**. For the first three, they'll preprocess the data set using Pandas, reduce the dimensions to three principal components using PCA, predict clusters using the K-means algorithm, create an elbow curve to find the best value for K. For the last deliverable, they'll create a 3D-scatter plot using Plotly Express, create a 2D scatter plot using Holoviews, and create a table with tradable cryptocurrencies for their results.

The first deliverable, **Deliverable 1: Preprocessing the Data for PCA**, requires the learners to preprocess the cryptocurrency data set in order to perform PCA in Deliverable 2. 

To complete this deliverable, they'll neeed to use Pandas to filter the data, drop null values, drop columns, create variables for text features using the `get_dummies()` method, and standardize the data with `StandardScaler()`.

We have provided the [crypto clustering starter code](../../../../01-Assignments/18-Unsupervised-Learning/Resources/crypto_clustering_starter_code.ipynb) to assist the students with instrucitons to complete this deliverable. 

For the second deliverable, **Deliverable 2: Reducing Data Dimensions Using PCA**, they'll apply the PCA algorithm to reduce the dimensions of the `X` DataFrame they created in Deliverable 1 to three principal components and place these dimensions in a new DataFrame named `pcs_df`. 

The [crypto clustering starter code](../../../../01-Assignments/18-Unsupervised-Learning/Resources/crypto_clustering_starter_code.ipynb) has empty input cells where they'll need to add their code to get the output shown. 

For the third deliverable, **Deliverable 3: Clustering Cryptocurrencies Using K-means**, they'll create an elbow curve using `hvPlot` to find the best value for K from the `pcs_df` DataFrame created in Deliverable 2. Then, they’ll run the K-means algorithm to predict the K clusters for the cryptocurrencies’ data.

Like Deliverable 1 and 2, the students will need to add the code to the input cells to get the output shown in the [crypto clustering starter code](../../../../01-Assignments/18-Unsupervised-Learning/Resources/crypto_clustering_starter_code.ipynb). 

* First, the students will need to create an elbow curve using `hvPlot` to find the best value for K.

* Next, they'll run the K-means algorithm on the the `pcs_df` DataFrame to make predictions of the K clusters for the cryptocurrencies’ data.

* To complete this deliverable, they'll need to create a new DataFrame, `clustered_df`, by concatenating the `crypto_df` and `pcs_df` DataFrames on the same columns. Add then `CoinName` and `Class` columns to the `clustered_df` DataFrame. 

For the last deliverable, **Deliverable 4: Visualizing Cryptocurrencies Results**, the students will be create a 3D scatter plot using Plotly Express and 2D scatter plot using `hvplot`, and create a table with all the current tradable cryptocurrencies using the `hvplot.table()` function.

In the [crypto clustering starter code](../../../../01-Assignments/18-Unsupervised-Learning/Resources/crypto_clustering_starter_code.ipynb) we have provided empty input cells where they'll need to add their code to get the output shown. 

They should be familiar with creating the 3D and 2D scatter plots since these are covered in this module. However, we have provided links to documentation to help them add additional parameters to a Plotly Express 3D scatter plot, and customize a 2D `hvplot` scatter plot.

There are also links to documentation on how to create a table using the `hvplot.table()` function, and use the `MinMaxScaler().fit_transform` method to scale data.  

Encourage your class to begin the Challenge as soon as possible, if they have not already begun, and to use the Learning Assistants channel and pre-scheduled Office Hours with their instructional team for help as they progress through their work. If they feel like they need context to understand documentation or instructions throughout the week, this is where they can get it.

Open the floor to discussion and ensure to answer any questions they may have about the Challenge requirements before moving onto other areas of interest.

</details>

### End Class

© 2020 Trilogy Education Services, a 2U, Inc. brand.  All Rights Reserved.
