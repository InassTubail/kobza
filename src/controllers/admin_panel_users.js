const queries = require('../model/query/queries');

const panel_users = (req,res)=>{
  queries.userforadmin((err,orders)=>{
    const totalSpentByUserId = orders.reduce((usersWithTotals, userOrder)=>{
      if(usersWithTotals[userOrder.user_id] == undefined) {
        usersWithTotals[userOrder.user_id] = userOrder;
        userOrder.totalSpent = 0;
        userOrder.totalOrders = 0;
      }
      usersWithTotals[userOrder.user_id].totalSpent += userOrder.price;
      usersWithTotals[userOrder.user_id].totalOrders += 1;
      return usersWithTotals;
    }, {})
    const users = Object
      .keys(totalSpentByUserId)
      .map(k => totalSpentByUserId[k])

    res.status(200).render('admin_panel_users',{layout:false, users });
  });
  }
module.exports = panel_users
