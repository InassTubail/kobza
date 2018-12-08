const queries = require('../model/query/queries');
const panel_users = (req,res)=>{
  queries.userforadmin((err,result)=>{
    res.status(200).render('admin_panel_orders',{layout:false,result});
  })
  }
module.exports = panel_users
