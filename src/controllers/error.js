const err = (req,res)=>{
  res.status(500).render('error',{layout:false});
}
module.exports=err;
