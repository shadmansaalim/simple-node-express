const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow I am learning NodeJs. Yayyyyyy')
});

const users = [
    {
        id: 0, name: 'Saalim', email: 'shadmansaalim321@gmail.com'
    },
    {
        id: 1, name: 'Jawad', email: 'jawadahmed@gmail.com'
    },
    {
        id: 2, name: 'Ibnul', email: 'ibnulazraf@gmail.com'
    },
    {
        id: 3, name: 'Faraz', email: 'farazfakko@gmail.com'
    },
    {
        id: 4, name: 'Alif', email: 'alifgoru@gmail.com'
    },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// APP METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id])
    console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy Tok Fazli')
})


app.listen(port, () => {
    console.log('Listening to port', port);
});