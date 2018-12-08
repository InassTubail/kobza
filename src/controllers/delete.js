const queries = require('../model/query/queries');
const deletee = (req,res) =>{
  const { id } = req.body;
  queries.deleteOrder(id,(err,result)=>{
    if(err) return res.render('error',{errpr:err.toString(),layout:false});
       queries.cart(req.user.id,(err,data)=>{
         if(err) return res.render('error',{errpr:err.toString(),layout:false});
         queries.total(req.user.id,(err,totalprice)=>{
           if(err) return res.render('error',{err:err});
           if(totalprice[0].sum !== null)
           {
             return res.status(200).render('cart',{
               data:data,
               totalprice:totalprice[0].sum,
                layout:false
             });
           }
           else {
             return res.status(200).render('cart',{
               data:data,
               totalprice:'0',
                layout:false
             });
           }

         });
       });
  });
}
module.exports = deletee;
