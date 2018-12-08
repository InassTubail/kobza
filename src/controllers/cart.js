const queries = require('../model/query/queries');
const cart = (req, res) => {
  const { id } = req.user;
  queries.cart(id, (err, data) => {
    if (err) return res.render('error', {
      err: err
    });
    queries.total(id, (err, totalprice) => {
      if (err) return res.render('error', {
        err: err
      });
      if (totalprice[0].sum !== null) {
        return res.status(200).render('cart', {
          data: data,
          totalprice: totalprice[0].sum,
          colorCart:true,
        });
      } else {
        return res.status(200).render('cart');
      }

    })
  });
}
const pcart = (req,res) =>{
  const { note } = req.body;
  const id = req.body.id_order
  if(note == undefined && id ==undefined ){
    res.render('cart');
  }else if (typeof id == 'string') {
    queries.updateOrder(note,id,(err,result)=>{
      if (err) return res.render('error', {
        err: err
      });
      res.render('cart',{massg:true});
    });
  }
 else {
   id.forEach((item,index)=>{
    queries.updateOrder(note[index],item,(err,result)=>{
      if (err) return res.render('error', {
        err: err
      });
    });
    if(index === id.length - 1 )
    res.status(200).render('cart',{massg:true});
});
}

}
module.exports = {cart,pcart}
