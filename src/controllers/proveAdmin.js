const auth = require('../model/query/auth');
const verifyCookie = (req, res, next) =>{
  const {role,id} = req.user
  if(role === 'admin' && id === 1){
        next();
    }

  else{
    res.redirect('/error');
  }
}
module.exports = verifyCookie;
