# Import Tidyverse
library(tidyverse)

# Use the pipe operator with mutate to create a new calcualted field
zillow_oc_2017 <- zillow_oc_2017 %>% mutate(acres=lotsizesquarefeet/43560) 

# Use the pipe operator with group_by to summarize and return the count of records by category
grouped_by_zip <- zillow_oc_2017 %>% group_by(regionidzip) %>% summarize(Count=n(), .groups="keep")
grouped_by_year <- zillow_oc_2017 %>% group_by(yearbuilt) %>% summarize(Count=n(), .groups="keep") 

# Use the pipe operator with group_by to summarize and return summary statistics on multiple fieds
grouped_by_year <- zillow_oc_2017 %>% group_by(yearbuilt) %>% summarize(Count=n(), 
                                                                        Mean_SqFt=mean(finishedsquarefeet), 
                                                                        Median_SqFt=median(finishedsquarefeet), 
                                                                        Max_Tax_Value=max(taxvaluedollarcnt),
                                                                        .groups="keep")