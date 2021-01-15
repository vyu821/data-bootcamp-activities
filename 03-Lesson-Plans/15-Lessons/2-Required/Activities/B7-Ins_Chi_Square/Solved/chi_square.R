data = data.frame(
  category = c("omnivores", "carnivores", "herbivores"), 
  observed_values = c(220, 55, 25) 
)

chisq.test(data[['observed_values']])
# X-squared = 220.5, df = 2, p-value < 2.2e-16
# Since the chi square value of 220.5 exceeds the critical value of 5.99, we conclude that the results are 
# statistically significant.