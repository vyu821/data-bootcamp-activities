# Module 10: Virtual Class (Required) Lesson Plan

## Overview

Today's Virtual Class (Required) lesson will review HTML and CSS, the Document Object Model, web scraping with BeautifulSoup and Splinter, storing document data with MongoDB, and displaying data with Flask. This lesson builds on the weekly materials covered in "Module 10: Mission to Mars" to cement the topics covered in new contexts.

## Learning Objectives

At the end of the session, learners will be able to:
 
* Identify HTML tags
* Use CSS selectors
* Maneuver the DOM tree structure
* Use BeatifulSoup to extract data from web pages
* Use Splinter to automate a web browser
* Store data in MongoDB
* Use Flask to create a web application to display data

## Instructor Prep

<details>
  <summary><strong>Career Services</strong></summary>

  Just a reminder that each week students receive a Career Connection in their course of work that ties to what academic content is being consumed. This Career Connection relates this week's material to a professional setting, encourages students to complete certain Career Services tasks, and provides technical interviewing questions, where applicable, that the student can work through.

  Encourage students to work through this material and if you'd like more information on Career Services, please check out the Career Services [resource page](http://bit.ly/DataVizCS) for Data Analytics and Visualization. 

</details>

- - -

# Class Activities

## 1. Warm-up & Temperature Check

| Activity Time:       0:10 |  Elapsed Time:      0:10  |
|---------------------------|---------------------------|

<details>
  <summary><strong> 🎉 Everyone Do: Interview Question Warm-Up (5 mins before class, first 5 mins of class)</strong></summary>

Open the [slideshow](https://docs.google.com/presentation/d/1QkPT7RZS98D2_6xZAcU66kmBQ9BeyVCXxjmLfdBWIiI/edit?usp=sharing) for today's class and begin the weekly presentation with the first slide. The first slide displays an interview question that a student may encounter based on the content of this week's content. 

**This week's question:** What are some challenges with web scraping?

Allow the question to be on the screen 5 mins prior to the start of class as students join the session. Allow the class 1 minute at the start of class to review, then you will ask for a student to volunteer their answer to the question. Next, offer the answer or a few approaches you would take for answering the question.

**Possible answers to this week's question:**

* Websites change, which may break your web scraper

* Scraping data may violate a websites terms of service

* Web scraping is slower than using an API

* Republishing scraped data may violate copyright

</details>

<details>
  <summary><strong> 📣 Instructor Do: Temperature Check (5 mins)</strong></summary>

Using the [Zoom Polling](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) feature or a [Poll Everywhere](http://www.polleverywhere.com), launch a poll of the class to identify areas that they would like to review from the week's asynchronous content. 

**Poll Text:**

*Select all of the topics that you feel prepared to apply outside of the class from this week's lesson:*

* Basic MongoDB Queries
* MongoDB: Removing, Updating, and Dropping
* Pymongo
* Web Scraping with Beautiful Soup
* Posting Scraped Data to MongoDB
* Splinter
* HTML
* Flask: Rendering Strings
* Flask: Rendering Lists and Dictionaries

Based on the results of the poll, advance to the correct slide for a review of the topics with the lowest scores. Choose 2 topics at minimum to review, or more as time permits to review.

</details>

## 2. Adaptive Learning Blocks

| Activity Time:  1:10 |  Elapsed Time: 1:20  |
|----------------------|----------------------|

>***Choose:***
>
>* One 40 min-block
>* *and* one 30-min block
>
>***then proceed to 3. Break.***

### Basic MongoDB Queries (40 mins)

<details>
  <summary><strong> ✏️ Students Do: Mongo Class (0:20)</strong></summary>

* In this activity, students will familiarize themselves with the basic query operations in MongoDB. Specifically, they will practice inserting and finding documents.

  ![Mongo Class Output](Images/04-MongoClass_Output.png)

* **Instructions**:

  * Use the command line to create a `ClassDB` database

  * Insert entries into this database for yourself and the people around you within a collection called `students`

  * Each document should have a field of `name` with the person's name, a field of `favorite_python_library` for the person's favorite Python library, a field of `age` for the person's age, and a field of `hobbies` which will hold a list of that person's hobbies.

  * Use the `find()` commands to get a list of everyone of a specific age before using `name` to collect the entry for a single person.

* **Bonus**:

  * Check out the MongoDB documentation and figure out how to find users by an entry within an array.

</details>

<details>
  <summary><strong> ⭐ Review: Mongo Class (0:05)</strong></summary>

* Open up [Stu_MongoClass](Activities/A1-Stu_MongoClass/Solved/MongoClass.md) within an editor and go over the code contained within with the class, answering whatever questions students may have.

* When discussing this activity, make sure to hit upon the following points...

  * Creating/selecting a database is simple: `use classDB`, where `classDB` is the name of the database.

  * Inserting a document into a collection is also simple. The syntax involved is: `db.students.insert({})`, where `students` is the name of the collection, and a document in the form of a dictionary is inserted between the parentheses.

    ![Inserting Documents](Images/04-MongoClass_Insert.png)

</details>

<details>
  <summary><strong> 📣 Instructor Do: Basic MongoDB Queries (0:15)</strong></summary>

* Instruct the class to open `mongod` if they don't already have it open and to follow along throughout this activity.

  * The `mongod` window must remain open so that MongoDB can continue to run.

  * While `mongod` is running, open up another terminal/bash window and run `mongo` to start up the mongo shell.

* As with Postgres, the first step in working with any kind of database is to create that database on the server.

  * Create the database `travel_db` by typing the command `use travel_db` into the mongo shell.

  * The existence of this database can be verified using the `db` command. This command lets users know which database they are currently working inside of.

  * To show all of the databases that currently exist on the server, type `show dbs` into the Mongo shell.

    ![Databases](Images/03-BasicMongo_DB.png)

  * Only those databases that contain some data will be shown. MongoDB will not save a database until some values exist within it.

* To show the collections within the current database, enter `show collections` into the mongo shell.

  * Because no collection has been created within `travel_db` yet, nothing will be returned at this time.

  * To insert a document into a database's collection, the syntax `db.collectionName.insert({key:value})` is used.

    ![Inserting Data](Images/03-BasicMongo_Collections.png)

  * The `db` implicitly refers to the currently selected database. In this specific case that means it is referring to `travel_db`.

  * `collectionName` should be replaced with the name of the collection that the data will be inserted into. If the named collection does not yet exist, then mongo will create it automatically.

  * `insert({key:value})` allows users to then insert a document into the collection. Remind the students that the format of the document in functionally similar to that of a Python dictionary.

  * `db.collectionName.find().pretty()` can then be used in order to print out the data that are stored within the named collection. The `pretty()` method prints out the data in a more readable format.

    ![Pretty Print](Images/03-BasicMongo_PrettyPrint.png)

  * With the assistance of the class, insert two or three new documents into the `destinations` collection before moving onto the next point.

* To find specific documents within a collection, the syntax used is `db.collectionName.find({key:value})`.

    ![Finding Documents](Images/03-BasicMongo_Find.png)

  * The first line of code above will perform a search for all documents whose `country` matches `USA`.

  * The second line will return all documents whose `continent` is `Europe`.

  * Lastly, explain how it is possible to find a single document by its `_id` which is a uniquely generated string that is automatically set whenever a document is made.

* Answer any questions students may have before moving onto the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3dG1nxY)</sub>

### MongoDB: Removing, Updating, and Dropping(30 mins)

<details>
  <summary><strong> ✏️ Students Do: Dumpster_DB (0:15)</strong></summary>

* In this activity, students will gain further practice with CRUD operations in MongoDB as they create a database centered around dumpster diving.

  ![Dumpster DB Output](Images/06-DumpsterDB_Output.png)

* **Instructions**:

  * Create and use a new database called `Dumpster_DB` using the Mongo shell.

  * Create a collection called `divers` which will contain a string field for `name`, an integer field for `yearsDiving`, a boolean field for `stillDiving`, and an array of strings for `bestFinds`.

  * Insert three new documents into the collection. Be creative with what you put in here and have some fun with it.

  * Update the `yearsDiving` fields for your documents so that they are one greater than their original values.

  * Update the `stillDiving` value for one of the documents so that it is now false.

  * Push a new value into the `bestFinds` array for one of the documents.

  * Look through the collection, find the diver with the smallest number of `bestFinds`, and remove it from the collection.

</details>

<details>
  <summary><strong> ⭐ Review: Dumpster_DB (0:05)</strong></summary>

* Open up [Stu_DumpsterDB](Activities/A2-Stu_DumpsterDB/Solved/dumpsterDB.md) within an editor and go over the code contained within with the class, answering whatever questions students may have.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Removing, Updating and Dropping in MongoDB (0:10)</strong></summary>

* If students need more time going over updating and deleting data, do this optional activitiy.

* Using the `travel_db` database from earlier, show the class how they can use the `db.collectionName.update()` method to update documents.

  * The `update()` method takes in two objects as its parameters. The first object tells the application what document(s) to search through whilst the second object informs the application on what values to change.

  * The second object passed uses the following syntax: `{$set: {KEY:VALUE}}`. Failing to use this syntax could lead to errors or might even break the document.

  * Make sure to let the class know that the `update()` method will only update the first entry which matches.

  * To update more than one document, the `updateMany()` method can be used instead. This method will update all of the records that meet the given criterion.

  * Passing the parameter `{multi:true}` into the `update()` method would also work but is more complex and not ideal.

    ![Updating Mongo](Images/05-MongoCRUD_Update.png)

  * If the field to update does not yet exist, the field will be inserted into the document instead.

  * If the document being searched for within a collection does not exist, the `update()` method will not create the document in question unless `{upsert:true}` is passed as a parameter. This option combines `update` and `insert`, meaning that if a document already exists that meets the given criterion, it will be updated. If the document doesn't exist, however, MongoDB will create one with the given information.

    ![Upsert Option](Images/05-MongoCRUD_Upsert.png)

  * To add elements into an array, use `$push` instead of `$set`. This will push the value provided into the array without modifying any of the other elements.

    ![Push to Array](Images/05-MongoCRUD_Push.png)

* Deleting documents from a Mongo collection is easy as the `db.collectionName.remove({})` method is used.

  * The object being passed into the `remove()` method dictates what key/value pairing to search for. Adding the `justOne` parameter will remove a single document.

  * Without the `justOne` parameter, all documents matching the key/value pairing will be dropped from the collection.

  * Passing an empty object into the `remove()` method will drop all documents from the collection. This is extremely risky as all of that data will be lost.

  * The `db.collectionName.drop()` method will delete the collection named from the Mongo database while `db.dropDatabase()` will delete the database itself.

    ```python
    # Show how to delete an entry with db.[COLLECTION_NAME].remove({justOne: true})
    db.destinations.remove({"country": "Morocco"},
    {justOne: true})

    # Show how to empty a collection with db.[COLLECTION_NAME].remove()
    db.destinations.remove({})

    # Show how to drop a collection with db.[COLLECTION_NAME].drop()
    db.destinations.drop()

    # Show how to drop a database
    db.dropDatabase()
    ```

* Answer any questions the class may have before moving on to the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3bp7CVC)</sub>

### Pymongo (40 mins)

<details>
  <summary><strong> ✏️ Students Do: Mongo Grove (0:25)</strong></summary>

* In this activity, students will build a command-line interface application for the produce department of a supermarket. They will have to use PyMongo to enable Python to interact with MongoDB.

* **Instructions**:

  * Use Pymongo to create a `fruits_db` database, and a `fruits` collection.

  * Into that collection, insert two documents of fruit shipments received by your supermarket. They should contain the following information: vendor name, type of fruit, quantity received, and ripeness rating (1 for unripe, 2 for ripe, 3 for over-ripe).

  * Because not every supermarket employee is versed in using MongoDB, your task is to build an easy-to-use app that can be run from the console.

  * Build a Python script that asks the user for the above information, then inserts a document into a MongoDB database.

  * It would be good to Modify the app so that when the record is entered, the current date and time is automatically inserted into the document.

* **Hint**:

  * Consult the [documentation](https://docs.python.org/3/library/datetime.html) on the `datetime` library.

</details>

<details>
  <summary><strong> ⭐ Review: Mongo Grove (0:05)</strong></summary>

* Open up [Stu_MongGrove](Activities/A4-Stu_MongGrove/Solved/mongo_grove.py) within an IDE and go over the code contained within with the class, answering whatever questions students may have.

  * A connection string is created and set to the variable `conn` before being used to create a connection to a local MongoDB server.

  * After declaring the database and the collection as `db` and `collection`, the user's input is used to set the `vendor`, `fruit_type`, `quantity`, and `ripeness` variables. These items are then inserted as key-value pairs within a dictionary.

  * Point out that `datetime.datetime.utcnow()` can be used as the value of a key-value pair to be inserted as a timestamp of the data entry.

  * In order to insert the dictionary created as a new document, the `insert_one()` method is used.

  * To print the current inventory within the collection, a `find()` query is used on `fruits_db` and then the results are looped through.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Introduction to Pymongo (0:10)</strong></summary>

* This activity provides extra practice with the use of the Pymongo library which allows developers to use Python to work with MongoDB.

  * Remind students that Pymongo serves as the interface between Python and MongoDB.

  * The syntax used in Pymongo is strikingly similar to that of MongoDB. As such, the learning curve for the library is quite small in comparison to something like SQLAlchemy.

* Open up [Ins_PyMongo](Activities/A5-Ins_PyMongo/Solved/IntroToPymongo.py) within an IDE and work through the code line-by-line with the class, answering whatever questions students may have.

  * After importing the PyMongo library into the application, a connection with a running instance of MongoDB must be established using `pymongo.MongoClient(connectionString)`

  * As was the case with SQLAlchemy, the connection PyMongo establishes is set with a connection string. This string uses the syntax `mongodb://USERNAME:PASSWORD@HOST:PORT`

  * Since the default localhost connection does not have a username or password set, the string for local instances of MongoDB would be `mongodb://localhost:27017`

  * Explain that `27017` is the default port used by MongoDB. It also happens to be a zip code in South Carolina.

    ![PyMongo Connection](Images/08-PyMongo_Connection.png)

* The `classDB` database is assigned to the variable `db` using `client.classDB`. This tells the PyMongo client that the developer will be working inside of the `classDB` database.

  * The `db.collectionName.find({})` method creates a query that collects all of the documents within the collection named.

  * The query can be made more specific by adding key/value pairs into the object passed as a parameter.

  * Inserting a document into a collection in Pymongo is similar to the process in MongoDB. Here, the only difference is the underscore used in the `insert_one()` method, in contrast to the camel case used in MongoDB's `insertOne()`.

    ![Read and Create](Images/08-PyMongo_ReadCreate.png)

  * Likewise, updating a document in Pymongo is similar to its counterpart in MongoDB. Again, the only difference is the underscore used in `update_one()`.

  * Remind the class that after specifying the field with which we identify the document to be updated, the information to be updated is specified with the syntax: `{$set: {key:value}}`.

  * Pushing an item into an array is similar with `$set` getting replaced with `$push` instead.

    ![PyMongo Update](Images/08-PyMongo_Update.png)

  * To delete a field from a document, the `update_one({},{})` method can be used and `$unset` is passed into the second object in place of `$set`.

  * Finally, go over how to delete a document from a collection using the `db.collectionName.delete_one({})` method where the document to delete has data matching that stored within the passed object.

    ![PyMongo Delete](Images/08-PyMongo_Delete.png)

* Answer any questions students may have before moving on to the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3bupNJk)</sub>

### Web Scraping with Beautiful Soup (30 mins)

<details>
  <summary><strong> ✏️ Students Do: Reddit Scraper (0:15)</strong></summary>

* In this activity, students will scrape the Python Reddit for potentially interesting content. They will also have to filter for threads with twenty or more comments in them.

  ![Reddit Scrape - Output](Images/04-RedditScrape_Output.png)

* **Instructions**:

  * In this activity, you will scrape the [Python Reddit](https://www.reddit.com/r/Python/) using Beautiful Soup. Scrape only threads that have twenty or more comments and then print the thread's title, number of comments, as well as the URL for the thread.

</details>

<details>
  <summary><strong> ⭐ Review: Reddit Scraper (0:10)
</strong></summary>

* There are many possible solutions to the activity. Explain that this is only one of them!

* Open up the [Python Reddit](https://www.reddit.com/r/Python/) in Chrome inspector: `view-source:https://www.reddit.com/r/Python/` and spend a minute or two parsing the information needed for this scraping activity.

* Explain that with Beautiful Soup's `find_all()` method, we retrieve all the entries on the page whose class is `top-matter`:

  ```python
  results = soup.find_all('div', class_='top-matter')
  ```

* We're then able to loop through the `results` to find each thread's title, number of comments, and the URL:

  ```python
  title = result.find('p', class_='title')
  title_text = title.a.text

  thread = result.find('li', class_='first')
  comments = thread.text

  link = thread.a['href']
  ```

* Explain that we also may also, optionally, elect to sort the results by the number of comments in the future. Accordingly, we need to parse the string containing the number of comments, e.g. "45 comments":

  ```python
  comments_num = int(comments.split()[0])
  ```

* First we split the string, then transform the number string into an integer.

* For the bonus, explain that we would have had to perform a second request with each thread's URL, using `requests`, made a second Beautiful Soup object, and retrieved the first comment.

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Craig's Wishlist (0:05)</strong></summary>

* If students need more time with scraping a live website, do this optional activity

* Explain that the first site to scrape will be `craigslist.com` to find the perfect gift for a friend.

  * The goal will be to scrape the results for an item - such as a guitar - on Craig's List and return each relevant listing's title, price, and link.

* Now open up [Ins_Craigslist.ipynb](Activities/B2-Ins_Craigslist/Solved/Ins_Craigslist.ipynb) go through the code with the class, answering whatever questions students may have.

  * Explain how the `requests` module is used to obtain the HTML object. Beautiful Soup then parses the returned object and converts it for further use.

    ![Craigslist Request](Images/03-Craigslist_Request.png)

  * The Beautiful Soup object is then pretty-printed to the console for analysis. This allows the developer to search through the source code and find what elements they wish to grab.

  * Another method of examining the HTML is to navigate to the webpage itself and open up the page's source within the inspector.

  * Through analysis of the HTML code, one finds that data desired is being stored within the HTML as a list item whose class is "result-row". The tittle of the item also takes the form of an anchor element whose class is "result-title".

    ![Source HTML](Images/03-Craigslist_Source.png)

  * The listing price can also be found to exist within a `span` element whose class is `result-price`.

  * To actually retrieve the contents of these elements, a `find_all('li', class_='result-row')` method can be called on the `soup` object.

  * Print out all of the `results` and a Python list of all the Craigslist listings from the query will be printed to the console.

    ![Craigslist Results](Images/03-Craigslist_Results.png)

  * By iterating through the listings, specific information can then be pulled from the Beautiful Soup object.

  * Each listing's title can therefore be gathered using `result.find('a', class_='result-title")`, their prices collected with `result.a.span.text`, and their links retrieved by accessing the "href" attribute of each listing using `result.a["href"]`.

  * Point out that an element's attributes are accessed using the square bracket notation.

    ![Collecting Results](Images/03-Craigslist_Collection.png)

* Displaying the results collected is as simple as printing the data to console as they are collected.

* Answer whatever questions the class may have before moving onto the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2WPLf6f)</sub>

### Posting Scraped Data to MongoDB (30 mins)

<details>
  <summary><strong> ✏️ Students Do: Hockey Headers (0:15)</strong></summary>

* In this activity, students will scrape the news page of the NHL website for articles and then post the title/header of each article to MongoDB.

  ![Hockey Headers](Images/06-HockeyHead_Output.png)

* **Instructions**:

  * Teamwork! Speed! Mental and physical toughness! Passion! Excitement! Unpredictable matchups down to the wire! What could be better? While these terms could easily be applied to a data science hackathon, we're talking about the magnificent sport of hockey.

  * Your assignment is to scrape the articles on the news page of the [NHL website](https://www.nhl.com/news) - which is frequently updated - and then post the results of your scraping to MongoDB.

  * Use Beautiful Soup and requests to scrape the header and subheader of each article on the front page.

  * Post the above information as a MongoDB document and then print all of the documents on the database to the console.

  * In addition to the above, post the date of the article publication as well.

</details>

<details>
  <summary><strong> ⭐ Review: Hockey Headers (0:05)</strong></summary>

* **Files:** [Stu_Hockey.ipynb](Activities/B3-Stu_HockeyHeaders/Solved/Stu_Hockey.ipynb)

* The main focus of this activity was for students to post scraped data into MongoDB. Do not spend excessive time on the minute details of the activity.

* During review, emphasize the broad strokes of the steps we took. We examined the inspector for HTML elements to scrape, extracted their text, then posted them to MongoDB.

* For the timestamp, it should suffice to explain simply that we find the string element then slice parts of it to re-compose it to fit our needs.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Mongo Craig (0:10)</strong></summary>

* If students need more experience with scraping to a Mongo database, do this optional activity.

* Open up [Ins_MongoScraping.ipynb](Activities/B4-Ins_MongoScraping/Solved/Ins_MongoScraping.ipynb) and explain to the class how they will now learn how to translate the results of a web scraper to a MongoDB database.

  * The application starts out by importing the relevant dependencies, initializing Pymongo, and defining the MongoDB database and collection.

  * Explain that, instead of `html.parser`, the `lxml` parser is being used. Slack out [this link](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser) to the class which provides an informative table on the various parsers available to Beautiful Soup and explain that some parsers are more flexible with parsing HTML than others.

  * Students may need to install the `lxml` module with `pip install lxml` from their console for this parser to function.

    ![Importing Libraries](Images/05-MongoScraping_Import.png)

  * Much of the code is familiar to the earlier example from craigslist. Explain that as the application loops through the results of the `soup` object it is simply gathering the information into a dictionary and then posting it to the mongoDB database.

    ![Scrape and Export to Mongo](Images/05-MongoScraping_TranslateAndExport.png)

  * After the application has pushed all of the scraped data into the Mongo database, this can be verified by querying the database one and printing out all of the results to the console.

    ![Qeurying and Printing](Images/05-MongoScraping_Querying.png)

  * Alternatively, the user could also query the database from the console... If they really wanted to.

    ![Query From Console](Images/05-MongoScraping_Console.png)

* Run through the code one more time with the class, having students explain the function of each code block to the best of their ability.

  * Answer whatever questions students may have before moving onto the next activity.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2zxbqGW)</sub>

### Splinter (40 mins)

<details>
  <summary><strong> ✏️ Students Do: Bookscraper (0:20)</strong></summary>

* **File:** [README.md](Activities/B5-Stu_Splinter/README.md)

* In this activity, students will practice their webscraping skills on a site similar to the one shown in the instructor demonstration.

</details>

<details>
  <summary><strong> ⭐ Review: Bookscraper (0:05)</strong></summary>

* **File:** [Stu_Splinter.ipynb](Activities/B5-Stu_Splinter/Unsolved/Stu_Splinter.ipynb)

* Here are some highlights to consider for the review.

* We iterate through each page and retrieve the HTML object, which we parse with Beautiful Soup. Using the browser inspector, we identify elements that contain information for each book, which we call `articles` in this case:

  ```python
  for x in range(50):
      html = browser.html
      soup = BeautifulSoup(html, 'html.parser')
      articles = soup.find_all('article', class_='product_pod')
  ```

* Inside the above loop, we simply navigate inside each `article`, first finding its first `h3` element, then the latter's first anchor, or `a` element. We then retrieve the attributes of the anchor element, including its `href` and `title`:

  ```python
  for article in articles:
      h3 = article.find('h3')
      link = h3.find('a')
      href = link['href']
      title = link['title']
      print('-----------')
      print(title)
      print('http://books.toscrape.com/'+ href)
  ```

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Introduction to Splinter (0:15)</strong></summary>

* **Important**: students must have the Chrome Webdriver installed for this activity Slack out the link to the documentation on installing the Chrome Webdriver: <https://splinter.readthedocs.io/en/latest/drivers/chrome.html>

* Up to this point, students have used Beautiful Soup to scrape a single, static page at a time.

  * Point out that, often, developers can only access interesting parts of a website after engaging in some kind of interaction with it.

  * Point out that, typically, these interactions are pretty easy to automate: Logging in, filling out and submitting forms, etc.

  * Explain that, when the data is "buried" behind such dynamic interactions, a web driver can be used to write scripts for the browser!

  * Explain that this allows developers to simulate user interactions programmatically and scrape multiple pages along the way.

* Mac users, if they have `brew` installed, can simply run `brew install chromedriver` from their terminal.

  * Windows users will need to [download the driver](https://sites.google.com/a/chromium.org/chromedriver/downloads), extract the executable program file, and then place it in the same folder as their Python script.

  * Have the TAs assist students who have trouble with installation.

* Open up [Ins_Splinter.ipynb](Activities/B6-Ins_Splinter/Solved/Ins_Splinter.ipynb) and explain that Splinter is a Python module that automates browser actions such as visiting a URL, filling fields, and clicking buttons. It can be a very useful tool in the webscraper's arsenal!

  * Go to <http://quotes.toscrape.com/>, a sample page to practice web scraping. At the bottom is a `Next` button. Explain that the application we are using will use Splinter to click these buttons and scrape each page.

    ![Splinter In Control](Images/07-Splinter_Automatic.png)

  * From the console, run the code, and show the results to the class.

    ![Images/splinter2.png](Images/07-Splinter_Console.png)

  * Each quote on a page is displayed along with its page number! Awesome!

* Walk through the code contained within with the class, explaining the application line-by-line.

  * As per usual, the application starts by importing in all of the dependencies needed.

  * An instance of a Splinter browser is then created. The driver being used for the browser interaction is 'chrome', and `False` is passed for the `headless` option. This means that the browser's actions will be displayed in a Chrome window so that the process can be seen.

  * The specified URL is then accessed and visited.

    ![Import and Visit Page](Images/07-Splinter_ImportRun.png)

  * Explain that for each page, developers will need to parse and display that site's contents, i.e. quotes. The browser then need to click the `Next` button to proceed onto the next page to collect the next collection of quotes.

  * Open the Chrome inspector to identify the element that the application will need to click.

    ![Next Page](Images/07-Splinter_NextButton.png)

  * Navigate to [Splinter's documentation](https://splinter.readthedocs.io/en/latest/elements-in-the-page.html) and inform the class that Splinter offers various ways of interacting with the page, including clicking an element by its text.

  * The next part is a for-loop with five iterations that uses Beautiful Soup to parse the page by collecting all of the quotes in that location.

  * Additionally, after printing all the quotes on a page, the application clicks on the `Next` button with Splinter's `click_link_by_partial_text()` method.

    ![Parse and Click](Images/07-Splinter_ParseClick.png)

  * Finally, explain that there are ten total pages on this practice website, but that this application arbitrarily chose five as the number of pages to cycle through.

* Answer any questions that students may have. In the next activity, they will be able to practice dynamic webscraping.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2YZ9NN8)</sub>

### HTML (40 mins)

<details>
  <summary><strong> ✏️ Students Do: My First HTML (0:15)</strong></summary>

* For this activity, students will create a simple HTML page.

* **Instructions:** [Stu_MyFirst_HTML](Activities/C1-Stu_MyFirst_HTML/README.md)

</details>

<details>
  <summary><strong> ⭐ Review: My First HTML (0:15)</strong></summary>

* When time is up, regroup and open up the solution file [`MyFirst_HTML_Solved`](Activities/C1-Stu_MyFirst_HTML/Solved/my-first.html) and walk students through the code. Be sure to point out and quiz them on what each of the different elements does. It's okay if they aren't sure, encourage them to guess!

* In particular, take extra care to make sure they understand why we need the `html`, `title`, and `body` tags. Be sure to mention the `DOCTYPE` and `meta` as well.

  * `doctype` - tells the browser which version of HTML (or XML) we used to create the document. This isn't really a tag like all the others, but a declaration we put at the top of our page above the rest of the code.

  * `html` - represents the root (top-level element) of an HTML document. All other elements go inside the `html` element.

  * `head` - holds elements that provide general information about the HTML document, such as links to external CSS and JavaScript files, the title of the web page, and any other metadata used in the document.

  * `title` -  defines the title of the document as shown in the browser's title bar or on the page tab.

  * `<meta charset-"utf-8">` - the `meta` tag is used for any other metadata that can't be represented by another HTML element inside the head. In this case, we're specifying that we want to use the "utf-8" character set. This has to do with which language, writing system, and characters being used on a web page. This is currently the most widely used and recommended, as well as one of the most comprehensive.

  * `body` - represents the content of an HTML document. Any content that needs to be rendered to the page goes inside the body.

* Once that's been established, move on to the other elements. Go back and forth between VS Code and the rendered HTML page inside Chrome to help explain potentially confusing aspects of the solution.

  * Ask students what they think the alt attribute on the image does. Make sure they understand that while it is **technically** optional, we should always try to include this because:

    * The alt attribute helps users with visual impairments understand what type of content is being displayed on the screen when using a screen reader or braille display.

    * It helps search engines better understand the content of our web pages, helping us with [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization).

    * If there's ever a time where our image can't be loaded properly, the alt attribute text will appear where the image would have.

  * Make sure students understand what `target="_blank"` does. Demonstrate this in the browser.

    * `target="_blank"` opens a link in a new tab.

      * By default, `target="_self"` is the default attribute for anchor tags (even if we don't write it explicitly). A hyperlink's default behavior is to open the web page in its current tab.

        * There are a few other, less frequently used options described in the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target), although we most likely won't need to use them.

  * If everyone's feeling confident with the solution, move on to the [bonus solution](Activities/C1-Stu_MyFirst_HTML/Solved/my-first-bonus.html).

    * Point out how we can create ordered and unordered lists by nesting `li` elements inside either an `ol` (ordered list), or `ul` (unordered list) element.

      * We can nest any kind of content inside of lists, we aren't limited to only using text. When we visit a website with a navigation bar, it's often built with links inside of unordered lists.

    * Lastly, show students how the iframe element works.

      * This isn't just for videos, although that's where most people have seen them before.

      * If we were to change the iframe's `src` attribute to another website e.g. `https://www.wikipedia.org`, and reloaded the page, we'd see a nested window to wikipedia.org.

        * It's important to note that some websites block themselves from being loaded in iframes on external sites or on locally hosted files.

        * Most importantly, make sure students understand that an iframe effectively embeds an entire web page into the current page.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Hello, HTML (0:10)</strong></summary>

* For this activity, **don't just display this file or copy and paste the code onto your screen.** Type it out from scratch, and let your students follow along.

* Create a new HTML file in your editor. Allow students to code along if they can, but tell them not to worry if they are having trouble keeping up. They will have a chance to work on an example of their own in a couple of minutes.

* Use the code in [`my-first.html`](Activities/C1-Stu_MyFirst_HTML/Solved/my-first.html) as a guide.
  ![02-Example](Images/01-Example-HTML.png)

* As you code, make sure to stress which elements are **required** for a valid HTML page, which they'll have to type out each and every time.

  * Required elements include:

    * `<!DOCTYPE html>` - **required** - informs the browser which version of HTML (or XML) you used to write the document. Doctype is a declaration, not a tag; you can also refer to it as "document type declaration", or "DTD" for short.

    * `<html>` - **required** - represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

    * `<head>` - **required** - not to be confused with [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), the head provides general information about the document, including its title and links to its scripts and stylesheets. None of the content inside the head should be content that needs to be visible on the rendered page.

    * `<meta charset-"utf-8">` - **required** - the meta element is used for representing any metadata information that can't be represented by another HTML meta-related element (`<title>`, `<style>`, `<script>`, etc.). In this case, we're specifying that we want to specify the character encoding of a web page. Essentially this helps tell the browser which language, writing system, and characters are being used in a web page. utf-8 is one of the most comprehensive and widely used and recommended. Students may occasionally see this not used, since most of the time this will be correctly inferred by the browser, or sent back from the server; it's still a good idea to include it to make sure that characters in our content are correctly interpreted, according to [The World Wide Web Consortium](https://www.w3.org/International/questions/qa-html-encoding-declarations.en)

    * `<title>` - **required** - defines the title of the document as shown in the browser's title bar or on the page tab. It can only contain text, any contained tabs are ignored.

    * `<body>` - **required** - represents the content of an HTML document. All content that needs to be rendered to the page should be placed inside the body.

* Make sure you're going from your editor to the rendered HTML in your browser in order to better show students the progress we're making as we're coding and to compare the written HTML code to the rendered page.

* As you type  `<img src="https://...">` (and other tags with attributes), explain briefly HTML attributes, and how they affect the HTML element: attributes on HTML elements are additional values that configure the elements or adjust their behavior. The `src` attribute here, for example, is a mandatory attribute for `img` that defines the URL of the image to be displayed. In anchor tag,  `<a href="https://...", the`href\` attribute describes the URL we should be taken to when a user clicks on a hyperlink created by the anchor tag.

* Be sure to point out any tags that are self-closing, such as the image tag. Explain that while **most** HTML elements are paired with a closing tag, some are self-closing. Elements without a closing tag are known as **void elements**. A closing slash is optional with these, e.g. `<img src="https://www.placehold.it/350x150"/>` vs `<img src="https://www.placehold.it/350x150">`. Whether you decide to use the closing forward slash or not, it's a good idea to be consistent in your usage.

* Once we have a few elements on the page, take this a step further and open Chrome Devtools. Devtools can be opened by any of the following:

  * Right clicking the rendered HTML document inside of Chrome and clicking the `inspect` option.

  * Pressing `F12` on Windows while in Chrome.

  * Pressing `command + option + i` on a Mac.

  ![Chrome Devtools](Images/02-Chrome-Devtools.png)

* Make sure the `Elements` tab is selected here.

* We don't need to dive too deeply into Devtools today, but it can be a helpful visual aid when showing students how our written HTML matches up to rendered elements on the page. Any element we click on inside the element inspector is highlighted on the rendered page.

  ![02-HTML](Images/03-HTML.png)

* Answer any questions before proceeding to the next exercise.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3csA6yT)</sub>

### Flask: Rendering Strings (30 mins)

<details>
  <summary><strong> ✏️ Students Do: Rendering A String With Flask (0:10)</strong></summary>

* **Files:**

* [Stu_Render_String/templates/index.html](Activities/C2-Stu_Render_String/Unsolved/templates/index.html)

* [Stu_Render_String/templates/bonus.html](Activities/C2-Stu_Render_String/Unsolved/templates/bonus.html)

* [Stu_Render_String/app.py](Activities/C2-Stu_Render_String/Unsolved/app.py)

* **Instructions:**

* Create a webpage that will return a welcome message with a name returned from your flask app.

* Add a paragraph underneath to display a hobby of your own; this will also be returned from the back end..

* Create a link to a bonus page that routes you to an entirely new static html page and also returns both your name and hobby from the back end.

* **Bonus**

* Add a link back to the home page in your bonus page.

* **Hints**

* Consult the [Flask Render Docs](http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates) for reference.

</details>

<details>
  <summary><strong> ⭐ Review: Rendering A String (0:05)</strong></summary>

* Open [Stu_Render_String/app.py](Activities/C2-Stu_Render_String/Solved/app.py) and go through the code and explaining"

  * Import libraries and setup the Flask app.

  * A name and hobby variable are declared then used later in the templates.

  * One route is set to the `/` url. This will return the `index.html` template as well as the name and hobby variables used on the web page.

  * A second route is set to the `/bonus` url. This will return the `bonus.html` template along with the same variables as the other route.

* Next, open to [Stu_Render_String/index.html](Activities/C2-Stu_Render_String/Solved/templates/index.html) and [Stu_Render_String/bonus.html](Activities/C2-Stu_Render_String/Solved/templates/bonus.html) in an editor, explaining:

  * The variable are placed inside curly braces and passed from the Flask app.

  * A link to the route `bonus` which will hit the route on the backend to render the `bonus.html` template.

  * A similar approach is taken on the `bonus.html` page but this time a link is added to route back to `/`.

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Flask Templates (0:15)</strong></summary>

* This demonstration reviews the basics of rendering a template with Flask.

* To begin, navigate to [Ins_Render_String](Activities/C3-Ins_Render_String/Solved), and run: `python app.py` then visit `http://127.0.0.1:5000/` in your browser.

* Next, open [Ins_Render_String/app.py](Activities/C3-Ins_Render_String/Solved/app.py), and change the value of the `text` argument inside `render_template`.

  * Restart the application to show the text rendered on the page has changed.

  * Emphasize that we did _not_ change the HTML.

* Explain that using **templates** allows us to dynamically configure what is displayed in a "preconfigured" (i.e., templated) web page.

  * Point out that the value of `text` is determined dynamically—we could set it equal to the result of a function call or _database query_, for example, and generate web pages reflecting the result of the query or function call.

* Explain that today's lesson will begin with a closer look at this demonstration, and proceed with exercises on:

  * Rendering collections (dicts and lists) with Flask

  * Rendering views over MongoDB with Flask

  * Scraping data into MongoDB

* Remind students that a major impetus for the use of templates is that it allows us to keep our webpage markup separate from our server logic.

  * Explain that Flask expects templates stored in a top-level directory called `templates`.

```python
/app.py
/templates
    /index.html
```

* Begin by opening `templates/index.html`.

* Point out the line containing `{{ text }}`.

  * Explain that the double brackets mark a place where we can "plug in" a variable value for `text`.

**Example `index.html`**

```html
<body>
  <div>
    <!-- Render our data -->
    <h1>{{ text }}</h1>
  </div>
</body>
```

* Remind students that we can change what is displayed in `{{ text }}` by updating the code on our server.

* Open `app.py`, and emphasize the following.

  * We must either import `render_template` from `flask`, or refer to it as `flask.render_template`.

  * We call `render_template` with _only_ the filename of the template we want to render. This is possible because we've adhered to the convention of placing our templates in the `templates` directory.

  * We pass the string `"hurricanes are a comin"` as a _keyword argument_ to `render_template`. Point out that the keyword, `text`, corresponds to the value we placed in double brackets in `index.html`. This is how the server knows what data to use to "fill out" the template.

* Make sure to point where this file lives and where it looks for files to render.

**Example `app.py`**

```python
# Dependencies
from flask import Flask, render_template

# Create Flask app
app = Flask(__name)


# Create route that renders index.html template and takes in the static string "hurricanes are a comin".
@app.route("/")
def echo():
    return render_template("index.html", text="Serving up cool text from the Flask server!!")
```

* Take a moment to demonstrate the application again, and address any remaining questions before moving on.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2SUczzh)</sub>

### Flask: Rendering Lists and Dictionaries (30 mins)

<details>
  <summary><strong> ✏️ Students Do: Rendering A List and Dictionary (0:15)</strong></summary>

* First demo the what the students should be creating by running [app.py](Activities/C4-Stu_Render_List_and_Dictionary/Solved/app.py) in a terminal then visit localhost on your browser.

* **Files**

* [index.html](Activities/C4-Stu_Render_List_and_Dictionary/Unsolved/templates/index.html)

* [app.py](Activities/C4-Stu_Render_List_and_Dictionary/Unsolved/app.py)

* **Instructions**

* In app.py there are the following:
    * `shelter_stats` is a dictionary containing statistics of animals up for adoption at a shelter,
    * `animals` is a list of animal types found at the shelter, 
    * `featured_pets` is a list of dictionaries of featured animals up for adoption.

* In the provided template `index.html`, render the dictionary of shelter statistics in the empty `span` tags

* Then render the list of animal types found at the shelter using `li` tags

* Finally, render the list of featured pets, displaying their name and animal type. Use an `li` tag for each featured pet, displaying their name and pet type.

</details>

<details>
  <summary><strong> ⭐ Review: Rendering A List and Dictionary (0:05)</strong></summary>

* Open [index.html](Activities/C4-Stu_Render_List_and_Dictionary/Solved/templates/index.html) in an editor and go through the code. Be sure to explain:

  * To loop through the list of pet types returned from the Flask app, percent brackets are used.

  * Additional code that is placed inside will also get duplicated.

  * Looping through a list of dictionaries is the same as any other list. Combine the dot notation to access a dictionary with the for loop to display both the name and type.

  * When the server talks to a database this will be a way for a web page to create enough content.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Rendering A List (0:05)</strong></summary>

* Change into [Ins_Render_Lis/Solved](Activities/C5-Ins_Render_List/Solved) and run `python app.py`.

* Explain to them that the setup is the same as rendering a string, but we will be manipulating a list instead of a simple string value. We are working our way up to rendering data from a Mongo database, and this will give you more practice with the basics.

* The main difference in this activity is we will be looping through the elements of a list. Open `app.py` to show a list can be passed and returned to a template.

```python
def index():
    team_list = ["Jumpers", "Dunkers", "Dribblers", "Passers"]
    return render_template("index.html", list=team_list)
```

* Next open the `index.html` and explain that a new syntax will allow a for loop to go through the list on the front end. This for loop will go through the list passed in the backend and create a new `<li>` for each name in the list.

```python
{% for name in list %}
  <li>{{ name }}</li>
{% endfor %}
```

* Emphasize that for code we are going to render to the page, we use the syntax: `{{ this will be displayed }}`

  * In particular, emphasize the double brackets, `{{...}}`.

* For code such as a loop, we use `{% this will not be displayed %}`

  * In particular, emphasize the "percent brackets", `{%...%}`.

  * Explain that "percent brackets" are used to implement logic within our templates.

  * Explain, to end a for loop `{% endfor %}` must be added at the end. Everything in between the percent brackets will be added to the webpage with each iteration of the loop.

* Identify the loop vs the `name` argument that will be rendered.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Rendering A Dictionary (0:05)</strong></summary>

* Change into [Ins_Render_Dict](Activities/C6-Ins_Render_Dict/Solved) and run `python app.py`.

* Consider taking a minute to review lists vs dictionaries.

  * Check for understanding: "What is the difference between a list and a dict?

  * They should be able to tell you that **dictionaries have key, value pairs**.

* Explain that in this activity we are going to access the dictionary values by using dot notation.

**Example `app.py`**

```python
def index():
    player_dictionary = {"player_1": "Jessica",
                         "player_2": "Mark"}
    return render_template("index.html", dict=player_dictionary)
```

**Example `index.html`**

```html
<ul style="list-style: none;">
    <li>{{ dict.player_1 }}</li>
    <li>{{ dict.player_2 }}</li>
</ul>
```

* Check that they understand how we are accessing our data.

  * Point out the "formula" for retrieving data via dot notation: `<dict_name>.<key>`.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2WKtTYA)</sub>

- - -

## 3. Break 

| Break Time: 0:05  | Elapsed Time: 1:25 |
|-------------------|--------------------|

- - -

## 4. Scrape and Render

| Activity Time:  0:35 |  Elapsed Time: 2:00  |
|----------------------|----------------------|

<details>
  <summary><strong> ✏️ Students Do: Scrape and Render (0:25)</strong></summary>

* **Files:**

  * [index.html](Activities/01-Stu_Scrape_Weather/Unsolved/templates/index.html)

  * [app.py](Activities/01-Stu_Scrape_Weather/Unsolved/app.py)

  * [scrape_costa.py](Activities/01-Stu_Scrape_Weather/Unsolved/scrape_costa.py)

* **Instructions**

* [01-Stu_Scrape_Weather/README.md](Activities/01-Stu_Scrape_Weather/README.md)

</details>

<details>
  <summary><strong> ⭐ Review: Scrape and Render (0:10)</strong></summary>

* Start by reviewing [scrape_costa.py](Activities/01-Stu_Scrape_Weather/Solved/scrape_costa.py) first. Go through the code explaining:

  * The `init_browser` function is used to initialize the browser.

  * The `scrape_costa` function contains all of the code to scrape the website and return a Python dictionary of the data.

  * The sleep timer is used to wait for the page to load.

    ```python
    time.sleep(1)
    ```

  * The average temperatures are located in a div tag with the id of `weather`.

    ```python
    avg_temps = soup.find('div', id='weather')
    ```

  * The min and max temps can be found by searching for the strong tags within the weather div.

    ```python
    # Get the min avg temp
    min_temp = avg_temps.find_all('strong')[0].text

    # Get the max avg temp
    max_temp = avg_temps.find_all('strong')[1].text
    ```

  * For the bonus, the image src is a relative path that needs to be joined with the base url.

    ```python
    # BONUS: Find the src for the sloth image
    relative_image_path = soup.find_all('img')[2]["src"]
    sloth_img = url + relative_image_path
    ```

  * A dictionary is used to store the values found during scraping.

    ```python
    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }
    ```

  * The browser can be closed after all of the data has been scraped.

  * Finally, the data is returned as a Python dictionary.

    ```python
    # Return results
    return costa_data
    ```

* Next, open [app.py](Activities/01-Stu_Scrape_Weather/Solved/app.py) and explain the following:

  * A database connection is made using PyMongo.

    ```python
    # Use PyMongo to establish Mongo connection
    mongo = PyMongo(app, uri="mongodb://localhost:27017/weather_app")
    ```

  * The first route will default to the `index.html` page.

  * The data for the homepage is retrieved from the mongo database collection.

  * The Flask `render_template` function is used to insert the temperature data into the homepage.

    ```python
    # Route to render index.html template using data from Mongo
    @app.route("/")
    def home():

        # Find one record of data from the mongo database
        destination_data = mongo.db.collection.find_one()

        # Return template and data
        return render_template("index.html", vacation=destination_data)
    ```

  * The `/scrape` route is used to scrape the external webpage and store the data in mongo.

    ```python
    # Route that will trigger the scrape function
    @app.route("/scrape")
    def scrape():

        # Run the scrape function
        costa_data = scrape_costa.scrape_info()

        # Update the Mongo database using update and upsert=True
        mongo.db.collection.update({}, costa_data, upsert=True)

        # Redirect back to home page
        return redirect("/")
    ```

* Lastly, open  [index.html](Activities/01-Stu_Scrape_Weather/Solved/templates/index.html) to show how the data is inserted into the HTML using the templating system.

  ```html
  <img src="{{ vacation.sloth_img }}" alt="Sloth">
  <h2>The typical weather in Costa Rica is:</h2>
  <h3>Max Temp: {{ vacation.max_temp }}</h3>
  <h3>Min Temp: {{ vacation.min_temp }}</h3>
  ```

* Encourage students to rework this problem as it will help them with the homework assignment.

* Take a moment to answer any remaining questions before slacking out the solution and dismissing class.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2LpK7RM)</sub>

### End Class
