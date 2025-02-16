# MongoDB Aggregation Pipeline Bug

This repository demonstrates a common error in MongoDB aggregation pipelines: using the `$sum` operator incorrectly within the `$group` stage.  The provided `bug.js` file contains the erroneous code that produces unexpected results. The `bugSolution.js` file shows the corrected version. 

**Description:**
The original code attempts to sum values from a field that is not numeric, resulting in an incorrect aggregation. The solution addresses this by using the correct numeric field within the `$sum` operator. 

**How to Reproduce:**
1.  Create a MongoDB collection with sample data.
2.  Run the code in `bug.js`. 
3.  Compare the output to the corrected output from `bugSolution.js`.

**Solution:**
The solution involves ensuring the field referenced within `$sum` is a numeric type, and if it's a string representing a number, convert it accordingly.