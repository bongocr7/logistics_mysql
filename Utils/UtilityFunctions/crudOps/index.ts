const execQuery = require('../index');

const createData = (sql,values,callback) => {
  execQuery.executeQuery(sql,values,callback);
};

const readData = (sql) => {
  execQuery.executeQuery(sql);
};

const updateData = (sql,values) => {
  execQuery.executeQuery(sql,values);
};

const deleteData = (sql,value) => {
  execQuery.executeQuery(sql,value);
};

module.exports = {createData,readData,updateData,deleteData};

/* 
//create data
const sql = 'INSERT INTO your_table_name (column1, column2) VALUES (?, ?)';
  const values = ['value1', 'value2'];

//read data
const sql = 'SELECT * FROM your_table_name';

//update data
const sql = 'UPDATE your_table_name SET column1 = ? WHERE column2 = ?';
  const values = ['new_value1', 'value2'];

//delete data
const sql = 'DELETE FROM your_table_name WHERE column1 = ?';
  const value = 'value1';
*/