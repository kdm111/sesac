const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const {id, pw} = req.body
    const {uId = id, uPw = pw} = userInfo
    if (id === uId && pw === uPw) {
      const token = jwt.sign({id}, SECRET)
      
      res.json({result : true, token})
    } else {
      res.status(401).send()
    }
    
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

app.post('/token', (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')
    try {
      const result = jwt.verify(token[1], SECRET)
      if(result.id === userInfo.id) {
        res.json({result : true, name : userInfo.name})
      }
    } catch (err) {
      console.log(err)
      res.json({result : false, message : '인증된 회원이 아님'})
    }
  }
})
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
