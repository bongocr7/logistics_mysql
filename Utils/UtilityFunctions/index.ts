const new_connection  = require("../../Database/Connection/Connection");

const executeQuery = (query, params?:any,callback?:(a,b)=>void) => {
  // Execute the query
  new_connection.query(query, params, function(err, results) {
    if (err) {
      // Handle error
      // callback(err, null);
      return;
    }

    // Return the results
    // callback(null, results);
    console.log(results);
  });
};

module.exports = {executeQuery};