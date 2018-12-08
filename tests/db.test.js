const test = require('tape');
const {insertData,selectData} = require('../src/model/query/auth.js');
const dbconnection = require('../src/model/databse/db_connection.js')

test('should insert data successfully', (t)=>{
  insertData('fake',05955555, 'fake', (err, data)=>{
    t.equal(err, null, 'There are no errors when data is inserted')
    t.deepEqual(data, [ { id: 1 } ], 'data is inserted successfully')
    t.end();
  })
})

test('should get all data from database', (t)=>{
  selectData(05955555, (err, data)=>{
    t.equal(err, null, 'There are no errors when getting all data')
    t.equal(data.length > 0, true, 'all data is got successfully')
    t.end();
})
})
