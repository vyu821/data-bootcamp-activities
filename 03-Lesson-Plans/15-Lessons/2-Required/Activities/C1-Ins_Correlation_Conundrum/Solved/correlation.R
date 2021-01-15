who_data <- read.csv('../Resources/WHO_data.csv')

ggplot(who_data, aes(Income_Per_Capita, Liters_of_Alcohol)) + geom_point()

ggplot(who_data, aes(Population_Median_Age, Cell_phones_per_100_people)) + geom_point()

ggplot(who_data, aes(Percent_Goverment_Expenditure_on_Health, Male_Life_Expectancy)) + geom_point()

ggplot(who_data, aes(Income_Per_Capita, Measles_immunization)) + geom_point()

cor(who_data$Income_Per_Capita, who_data$Liters_of_Alcohol)
cor(who_data$Population_Median_Age, who_data$Cell_phones_per_100_people)
cor(who_data$Percent_Goverment_Expenditure_on_Health, who_data$Male_Life_Expectancy)
cor(who_data$Income_Per_Capita, who_data$Measles_immunization)