// 1. Zip Code
// Set zip code variable
let locationZip = 94123

// Filter data where "Source Zipcode" matches zip code variable 
zipFiltered = data.filter(location => location["Source Zipcode"] === locationZip);

// Console log filtered results and the number of results
console.log(zipFiltered)
console.log("Filtered Results: ",zipFiltered.length)

// // 2. Location Type
// // Set type variable
// let locationType = "Financial Services"

// // Filter data where "NAICS Code Description" matches type variable 
// typeFiltered = data.filter(location => location["NAICS Code Description"] === locationType);

// // Console log filtered results and the number of results
// console.log(typeFiltered)
// console.log("Filtered Results: ",typeFiltered.length)


// // 3. Zip Code and Location Type
// // Filter data where "Source Zipcode" and "NAICS Code Description" matche variables
// zipTypeFiltered = data.filter(location => location["Source Zipcode"] === locationZip & location["NAICS Code Description"] === locationType);

// // Console log filtered results and the number of results
// console.log(zipTypeFiltered)
// console.log("Filtered Results: ",zipTypeFiltered.length)