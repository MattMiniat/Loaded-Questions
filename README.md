# Loaded Questions 
The study of Firearm mortality
Project authors: Michael Welkman, Matthew Miniat, and Mark Hinkle

## Summary

This project is inspired by the current events surrounding us today involving unjust violence involving firearms. At first, we wanted to analyze the causes of deaths involving legal intervention via the data we retrieved from the CDC official website. However, because the majority of data surrounding deaths caused by legal intervention is suppressed on the CDC website, we decided to broaden our focus and analyze data surrounding the deaths caused by firearms in the U.S. as a whole and the different categories therein. We are specifically looking at the causes of death, the number of deaths, the States these deaths occurred in, and the years these deaths took place between 1999 and 2018. We will also be including data from a Rand Study analyzing state-level estimates of firearm ownership, whether or not certain state-laws related to firearms were in effect during a specific year, and rates of suicide via firarms per biological sex (male/female). Unfortunately the Rand Study is limited to 2016, so two years are excluded from our analysis regarding firearm ownership rates and laws. 

## Extraction

We extracted the data from the CDC Official Website and Rand Study websites. 

## Transformation
We transformed and merged the data we recquired via jupyter-python and exported the new data table into csvs. 

## Loading the data
After we extracted and transformed the data, we then used flask to store the data into a SQL database.

For our Trends page, we used python functions to retrieve the data and return it in Json format. Then we used to javascript functions to build the Trends charts from the retrieved data and allowed the user to manipulate the data based on the year, State(s), or chart they wished to see.

As opposed to the trends page, our "Visuals" page uses Tableau Public to display interactive maps that have multiple filters. 

## Some interesting findings
1. The number one cause of death involving firearms are suicides.
2. Law enforcement intervention is slowly becoming unsuppressed.
3. There are less states with active gun laws in recent years than in the past.

## Citations/Urls

CDC data: https://wonder.cdc.gov/ucd-icd10.html

Rand Study data: Schell, Terry L., Samuel Peterson, Brian G. Vegetabile, Adam Scherling, Rosanna Smart, and Andrew R. Morral, State-Level Estimates of Household Firearm Ownership. Santa Monica, CA: RAND Corporation, 2020. https://www.rand.org/pubs/tools/TL354.html.
