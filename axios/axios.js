//very easy to use
//support modern browser including IDE
//returns promise

console.clear()
axios
.post('https://jsonplaceholder.typicode.com/posts', {
   
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})


.put('https://jsonplaceholder.typicode.com/posts/1', {
   
    body: JSON.stringify({
      id: 1,
      title: 'fooring',
      body: 'bar',
      userId: 1,
    }),
})


.patch('https://jsonplaceholder.typicode.com/posts/1', {
    
    body: JSON.stringify({
     
      body: 'barmaaaa',
     
    }),
})


.delete('https://jsonplaceholder.typicode.com/posts/1')

//.get('https://jsonplaceholder.typicode.com/posts/101')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))


//_______________axios-async $ await____

console.clear()

const makeRequest=async(config)=>{
    return await axios(config)
}

const getData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>console.log(res.data)) //return promise
    .catch((err)=>console.log(err))
}

getData();

const createData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'PUT',  
        body: JSON.stringify({
            id: 1,
            title: 'foobar',
            body: 'barfoo',
            userId: 1,
        }) 
    })
    .then((res) => console.log(res.data)) 
    .catch((err) => console.log(err));
};
createData()

const updateData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'POST',  
        body: JSON.stringify({
            id: 1,
            title: 'foobarnow',
            body: 'barfoo',
            userId: 1,
        }) 
    })
    .then((res) => console.log(res.data)) 
    .catch((err) => console.log(err));
};

updateData()

   


