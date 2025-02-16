```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: {/*filter*/}}, 
  {$group: {_id: "$field", sum: {$sum: {$toDouble: "$anotherfield"}}}}, //Convert to numeric if needed
  {$sort: {sum:-1}}
])
```