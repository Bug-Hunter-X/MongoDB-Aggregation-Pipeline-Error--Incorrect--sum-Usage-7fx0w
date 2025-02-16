```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: {/*filter*/}}, 
  {$group: {_id: "$field", sum: {$sum: "$anotherfield"}}}, //incorrect field for sum
  {$sort: {sum:-1}}
])
```