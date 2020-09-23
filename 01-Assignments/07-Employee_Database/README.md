# Module 7 Challenge Grading Instructions

The objective of this challenge is for learners to practice SQL queries and to gain exposure to a new skill: partitioning data.

## Written Analysis

The written analysis created during this challenge should capture these points: 

1. What was the problem the learner addressed?
2. What steps did the learner take to solve the problem?
3. An explanation of the analysis.

These points should be stored in a README.md document located in the home directory of the repo. In addition to the document type, the information must be presented in the form of at least three paragraphs and includes a copy of the ERD they created.

The goal of the writing assignment is for students to present their findings in a logical manner. Refer to the rubric for additional guidance.

## Queries

The final solution is provided to you in the [challenge.sql](Challenge/challenge.sql) code. Use this file as a reference when checking learners' submissions.

The challenge assignment requested two additional queries: one to determine how many of each title will be vacated as employees retire, and which employees are eligible to participate in a mentorship program.

**Number of Titles Retiring**

The first objective will result in duplicated data unless partitioned. To complete this portion completely, check for the following;

* A query that selects the applicable entities for a new table.
* A second query that partitions the data by emp_no to remove duplicates.

**Employees Eligible for Mentorship Program**

The second objective requires a count of the number of titles retiring, and a list of these employees. For this section, look for the following:

* A query using the COUNT function.
* A second query using two inner joins to create the table and a birth date between January 1, 1965, and January 31, 1965.
