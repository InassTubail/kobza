const queries = require('../model/query/queries');
const notification = (req,res) =>{
  const {sandwish,user_id,admin_notes} = req.body;
  console.log(typeof admin_notes,'admin_notes');
  let notes = '';
  if(admin_notes === ''){
     notes = `Your Sandwish ${sandwish} is Ready , Come to take it`
  } else {
     notes = admin_notes
  }
  queries.insertNotification(user_id,notes,(err,result)=>{
    res.redirect('/user-orders');
  });
  }
  module.exports = notification;
