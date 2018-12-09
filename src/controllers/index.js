const register = require('./register');
const login = require('./login');
const homepage = require('./homepage');
const verfiycookie = require('./verfiycookie');
const suggestion = require('./suggestion');
const cart = require('./cart');
const express = require('express');
const error = require('./error');
const deletee = require('./delete');
const map = require('./map.js');
const proveAdmin = require('./proveAdmin');
const adminpanelorder = require('./admin_panel_order');
const adminpanelusers = require('./admin_panel_users');
const adminpanelsuggestions = require('./admin_panel_suggestions');
const notification = require('./notification');
const usernotification = require('./user_notification');
const logout = require('./logout');
const router = express.Router();
router.get('/login',login.GETlogin);
router.post('/login',login.PostLogin);
router.get('/register',register.GETregister);
router.post('/register',register.PostRegister);
router.get('/',verfiycookie,homepage.homepage);
router.post('/',verfiycookie,homepage.POSThomepage);
router.post('/delete',verfiycookie,deletee);
router.get('/map',verfiycookie,map.map);
router.get('/suggestion',verfiycookie,suggestion.suggestion);
router.post('/suggestion',verfiycookie,suggestion.makesuggestion);
router.get('/cart',verfiycookie,cart.cart);
router.post('/cart',verfiycookie,cart.pcart);
router.get('/logout',logout);
router.get('/users',verfiycookie,proveAdmin,adminpanelusers);
router.get('/user-suggestions',verfiycookie,proveAdmin,adminpanelsuggestions);
router.get('/user-orders',verfiycookie,proveAdmin,adminpanelorder);
router.post('/notification',verfiycookie,notification);
router.get('/user_notification',verfiycookie,usernotification)
router.get('*',error);



module.exports = router;
