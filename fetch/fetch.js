//fetch -global method
//fetch -call in 2 ways
//.then
//async await
//fetch returns a promise
//dont support in old browser
console.clear();

//________________then__________________

fetch('https://jsonplaceholder.typicode.com/posts', {

   //post method create
   method: 'POST',
   headers: {
      'Content-Type': 'application/json; charset=UTF-8',
   },
   body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
   }),
})


   fetch('https://jsonplaceholder.typicode.com/posts/1', {

//put method update
   method: 'PUT',
   headers: {
      'Content-Type': 'application/json; charset=UTF-8',
   },
   body: JSON.stringify({
      id: 1,
      title: 'foobar',
      body: 'barfoo',
      userId: 1,
   }),
})


fetch('https://jsonplaceholder.typicode.com/posts/1', {

   //Patch method update
   method: 'PATCH',
   headers: {
      'Content-Type': 'application/json; charset=UTF-8',
   },
   body: JSON.stringify({
      title: 'foomanpo',
      
   }),
})


fetch('https://jsonplaceholder.typicode.com/posts/1', {

   //DELETE method 
   method: 'DELETE',
   id:1,
    })

   .then((res) => {
      if (!res.ok) {
         throw new Error(`Error: ${res.status}`); 
      }
      return res.json(); 
   })
   .then((data) => console.log('Success:', data)) 
   .catch((err) => console.error('Fetch Error:', err.message)); //  error handling


 //____________________Async Await_____________________

const makeRequest = async (url, config) => {
   
      const res = await fetch(url, config); 
      if (!res.ok) {
         throw new Error(`Error: ${res.status}`); // Proper error handling
      }
      const data = await res.json(); 
      return data;
  
};

//get Data

const getData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
};

//send data

const sendData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
         title: 'foo',
         body: 'bar',
         userId: 1,
      }),
   })
   .then((res) => console.log('POST Response:', res))
   .catch((err) => console.error('Error:', err));
};

//update date

const updateData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
         id: 1,
         title: 'foorfoori',
         body: 'bar',
         userId: 1,
      }),
   })
   .then((res) => console.log('UPDATE Response:', res))
   .catch((err) => console.error('Error:', err));
};

//patchcdata

const patchData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH', 
      headers: {
         'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        
         title: 'fagun',
         
      }),
   })
   .then((res) => console.log('UPDATE Response:', res))
   .catch((err) => console.error('Error:', err));
};

//delete data

const deleteData = () => {
   makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    
   })
   .then((res) => console.log('DELETE Response:', res))
   .catch((err) => console.error('Error:', err));
};


getDAta();
sendData();
updateData();
patchData()
deleteData();