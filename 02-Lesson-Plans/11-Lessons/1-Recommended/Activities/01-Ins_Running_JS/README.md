# Case Study

SF Registered Business Locations - San Francisco
Explore Open Data from San Francisco
City of San Francisco
Maintained by Kaggle updated 20191215 (Version 12)

https://www.kaggle.com/san-francisco/sf-registered-business-locations-san-francisco

This dataset includes the locations of businesses that pay taxes to the City and County of San Francisco. Each registered business may have multiple locations and each location is a single row. The Treasurer & Tax Collector’s Office collects this data through business registration applications, account update/closure forms, and taxpayer filings.

This dataset is maintained using Socrata's API and Kaggle's API. 


Todays class will be a case study where we have been hired to research the San Franciso area to help our client identify an optimal place to open their new financial services office.

Our dataset for this case study is a summarized version of the San Francisco Registered Business Locations. The dataset only includes locations that are still open, have a NAICS Code Description, and are located in California.         
  * Note: Because some business are based out of California and have locations out of state, those locations were removed from this analysis. 

- - -

# Javascript Tips

<details>
  <summary><strong> 📣 Instructor Do: Running JavaScript</strong></summary>

* The goal of todays analysis will be to work with and search through the dataset using JavaScript to identify locations meeting specific criteria as defined by the client and optimal to place their business based upon our recommendation. 

</details>

<details>
  <summary><strong> 📣 Instructor Do: Variables, Arrays, and Objects</strong></summary>

* The client that hired us wants to consider the Zip Code of 94123 in San Francisco as the first location. We will create variables to hold information about the desired location as we perform our analysis.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Functions and Arrow Functions</strong></summary>

* As we research different locations we will want to have functions defined that we can pass information like zip code and city to as arguments. The functions will then provide the resulting data we can use to inform our decision making process and more quickly gather data.

</details>

<details>
  <summary><strong> 📣 Instructor Do: For Loops</strong></summary>

* Having our details stored in variables and creating functions will help in our analysis. However, we need to look through each of the records to evaluate based upon the variables and to apply the fucntions. Here we will create a loop to go through a subset of the 96,624 records to prepare to eventually analyze all of the data. 

</details>

<details>
  <summary><strong> 📣 Instructor Do: filter()</strong></summary>

* Now that we can loop over our dataset we can reduce the results to only the records that match our criteria. In this case we will just look by the zip code provided by the client. By doing this we will be able to see what the current environment looks like in the specified zip code for financial service companies. 

</details>

<details>
  <summary><strong> 📣 Instructor Do: Conditionals</strong></summary>

* While analyzing our dataset we may want to consider differnt conditions in certain instances. Using conditionals we will be able to perform different analysis based on those conditions and even perform our search only if a certain condition exists.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Event Handlers</strong></summary>

* To ensure the search for our client's location is efficient we will use a form built with HTML and Bootstrap. Upon submitting criteria to the form we will return the matched results using event handlers. Based on these results we can create dossier's for multiple locations and determine the optimal placement for the client's office. 

</details
