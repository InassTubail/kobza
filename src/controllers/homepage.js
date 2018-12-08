const queries = require('../model/query/queries');
const homepage = (req, res) => {
  queries.GetProduct((err, products) => {
    if (err) {
      res.redirect("/error");
    } else {
      if(req.user.role === 'admin'){
        res.render('homepage', {
          products: products,
          admin:true
        });
      }else{
        res.render('homepage', {
          products: products
        });
      }
    }
  });
}
const POSThomepage = (req, res) => {
  const {
    quantity,
    idproduct
  } = req.body;
  const quantityNo = quantity ? quantity : 1;
  queries.makeOrder(req.user.id, idproduct, quantityNo,getDateTime(), (err, data) => {
    if (err) return res.render("error", {
      error: err.toString(),
      layout: false
    });

    queries.GetProduct((err, products) => {
      if (err) return res.redirect("/error");
      res.status(200).render('homepage', {
        products: products,
        icon: true
      });
    });
  });

}
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + "_" + hour + ":" + min + ":" + sec;

}
module.exports = {
  homepage,
  POSThomepage
}
