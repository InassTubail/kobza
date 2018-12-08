const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('all routes return the expected result', (t)=>{
  request(app)
    .get('/')
    .expect(302)
    .end((err, res) => {
      if(err){
        t.error(err)
      }else{
        t.equal(302, res.status, 'all routes return expected results')
        t.end();
      }
    });
});


test('check the status code of home route', (t)=>{
  request(app)
    .get('/')
    .expect(302)
    .end((err, res)=>{
      if(err){
        t.notOk(err);
      }else{
        t.equal(302, res.status, 'home page is returning a status code of 200 ')
        t.end();
      }
    });
});

test('should return register page successfully', (t)=>{
  request(app)
    .get('/register')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res)=>{
      if(err){
        t.error(err);
      }else{
        t.equal(200, res.status, 'register page is returned successfully')
        t.end();
      }
    });
});

test('should return the login page', (t) => {
  request(app)
    .get('/login')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if(err){
        t.error(err);
      }else{
        t.equal(200, res.status, 'login page is returned successfully')
        t.end();
      }
    });
});
test('the cart page is returned successfully', (t)=>{
  request(app)
    .get('/cart')
    .expect(302)
    .end((err, res)=>{
      if(err){
        t.error(err)
      }else{
        t.equal(302, res.status, 'cart page is returned successfully')
        t.end();
      }
    })
});
test('should return the suggestion page', (t)=>{
  request(app)
    .get('/suggestion')
    .expect(302)
    .expect('Content-Type', "text/plain; charset=utf-8")
    .end((err, res)=>{
      if(err){
        t.error(err)
    }else{
        t.equal(302, res.status, 'suggestion page is returnes successfully')
        t.end();
    }
  })
});

test('map page is returned successfully', (t)=>{
  request(app)
    .get('/map')
    .expect(302)
    .expect('Content-Type', "text/plain; charset=utf-8")
    .end((err, res)=>{
      if(err){
        t.error(err);
      }else{
        t.equal(302, res.status, 'map page is returned successfully')
        t.end();
      }
})
});

test('log out is returned successfully', (t)=>{
  request(app)
    .get('/logout')
    .expect(302)
    .expect('Content-Type', "text/plain; charset=utf-8")
    .end((err, res)=>{
      if(err){
        t.error(err)
      }else{
        t.equal(302, res.status, 'log out page is returned successfully')
        t.end();
      }
    })
});
