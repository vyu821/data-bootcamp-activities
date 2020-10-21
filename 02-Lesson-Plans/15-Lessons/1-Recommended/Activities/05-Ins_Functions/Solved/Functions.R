# Create a basic function with arguments
example_function <- function(x, y, z){

# Body for ananlysis
result = x + y + z

# Data returned
return (result) 
}

# Execute the sample function
example_function(1,2,3)

# Create a function to filter based on Square Footage
sqft_gt_filter <- function(data, sqft){

filtered_data <- data[deframe(data['finishedsquarefeet']) > sqft,]


return (filtered_data)
}

# Execute the function for home with more than 1,500 sqft
zillow_oc_sqft_gt_1500 <- sqft_gt_filter(zillow_oc_2017, 1500)



