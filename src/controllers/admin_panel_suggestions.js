const queries = require('../model/query/queries');
const panel_suggestions = (req,res)=>{
  queries.allsuggestion((err,data)=>{
    if(err) return res.render('error',{errpr:err.toString(),layout:false})
     res.status(200).render('admin_panel_suggestions',{data,layout:false});
  });
  }





module.exports = panel_suggestions
