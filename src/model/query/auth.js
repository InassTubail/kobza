const connection = require('../databse/db_connection.js');
const insertData = (name, number, password, cb) => {
  const sql = {
    text: `insert into users(name, phone_number, password)  VALUES ($1, $2, $3) RETURNING id`,
    values: [name, number, password]
  }
  connection.query(sql, (err, data) => {
    if (err) cb(err);
    else {
      cb(null, data.rows);
    }
  });
}

const selectData = (phone, cb) => {
  const sql = {
    text: `select * from users where phone_number = $1`,
    values: [phone]
  }
  connection.query(sql, (err, data) => {
    if (err) cb(err);
    else {
      cb(null, data.rows);
    }
  });
}
module.exports = {
  insertData,
  selectData
};
