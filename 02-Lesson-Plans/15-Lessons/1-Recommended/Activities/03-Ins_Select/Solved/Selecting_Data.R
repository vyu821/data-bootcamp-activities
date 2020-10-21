# Use bracket `[]` notation to select specific rows and columns by number, range, name, or vector

# Row Index Number, Column Index Number
zillow_oc_2017[1,1]

# Row Index Number, Column Name
zillow_oc_2017[1,'parcelid']

# Row Index Number Range, Column Index Number Range
zillow_oc_2017[1:2,1:14]

# Row Index Number Vector, Column Name Vector
zillow_oc_2017[c(1, 10, 42),c('finishedsquarefeet', 'yearbuilt', 'homevalue')]

# Filter data by row 
zillow_oc_sqft_gt_2000 <- zillow_oc_2017[deframe(zillow_oc_2017['finishedsquarefeet']) > 2000,]

# Check filtered data 
zillow_oc_sqft_gt_2000


