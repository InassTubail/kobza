const queries = require('../model/query/queries');
const user_notification = (req,res)=>{
  const {id} = req.user;
  queries.GetNotificationByUser(id,(err,result)=>{
    res.send(result)
});
}
module.exports = user_notification;
