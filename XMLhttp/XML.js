console.clear();
//event-onload,onerror

const makeRequest = (method, url, data ) => {
    const xmh = new XMLHttpRequest(); 

    xmh.open(method, url);

    xmh.setRequestHeader('Content-Type', 'application/json');

    xmh.onload = () => {
        try {
            let responseData = JSON.parse(xmh.responseText); 
            console.log(responseData);
        } catch (error) {
            console.error("Error parsing JSON response:", error);
        }
    };

    xmh.onerror = () => {
        console.error("Error occurred while making the request.");
    };

    if (data) {
        xmh.send(JSON.stringify(data)); 
    } else {
        xmh.send();
    }
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts'); 
};

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    });
};

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'foobar',
        body: 'barfoo',
        userId: 1,
    });
};

const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'change',
    });
};

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1'); 
};

getData();
sendData();
updateData();
updateSingleData();
deleteData();