const dbConnection = require('../databse/db_connection');


const GetProduct = (cb) => {
  const sql = 'SELECT * FROM products';
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const GetNotificationByUser = (id,cb) => {
  const sql = {
    text:'SELECT * FROM notification where user_id=$1',
    values:[id]
  }
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const insertNotification = (iduser,notes,cb) => {
  const sql = {
    text:'INSERT INTO notification(user_id,notes) VALUES ($1,$2)',
    values:[iduser,notes]
};
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const makeOrder = (iduser,idproduct,amount,data_time ,cb) => {
  const sql = {
    text:'INSERT INTO orders(user_id,product_id,amount,data_time) VALUES($1,$2,$3,$4) RETURNING * ',
    values:[iduser,idproduct,amount,data_time]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const cart = (user_id,cb) => {
  const sql = {
    text:'SELECT orders.*,products.name ,products.price,products.description,users.name as username from orders,products,users where users.id=orders.user_id and products.id=orders.product_id and users.id=$1',
    values:[user_id]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const total = (user_id,cb) => {
  const sql = {
    text:`SELECT SUM(products.price)
     from orders,products,users
     where users.id=orders.user_id
     and products.id=orders.product_id
     and users.id=$1 and orders.done = false`,
    values:[user_id]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const deleteOrder = (id,cb) => {
  const sql = {
    text:'DELETE FROM orders WHERE id = $1 RETURNING * ',
    values:[id]
};
dbConnection.query(sql, (err, res) => {
  if (err) cb(err);
  cb(null, res.rows);
});
}
const updateOrder = (note,id,cb) => {
  const sql = {
    text:`UPDATE orders SET notes = $1, done = true WHERE id = $2`,
    values:[note,id]
};
dbConnection.query(sql, (err, res) => {
  if (err) cb(err);
  cb(null, res.rows);
});
}
const makesuggestion = (user_id,suggestion,cb) => {
  const sql = {
    text:'INSERT INTO  suggestions(user_id ,suggestion) VALUES ($1,$2)',
    values:[user_id , suggestion ]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};
const allsuggestion = (cb) => {
  const sql = `SELECT suggestions.*, users.name ,users.phone_number
   From suggestions ,users where suggestions.user_id = users.id `;
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const userforadmin = (cb) =>{
  const sql = `select orders.*,products.name as sandwish,products.price, users.name as user,users.phone_number
   from orders,users,products where orders.user_id = users.id and orders.product_id = products.id and orders.done = true`;
   dbConnection.query(sql, (err, res) => {
     if (err) return cb(err);
     cb(null, res.rows);
   });
}
module.exports = {
GetProduct,makeOrder,cart,deleteOrder,makesuggestion ,
allsuggestion,total,GetNotificationByUser
,updateOrder,userforadmin,insertNotification
};
