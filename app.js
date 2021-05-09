const http = new easyHttp()

// GET ALL POST
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });


// GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/2', function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })

//  Data required for put and post
const data = {
  title: 'Ayush Goel love life',
  body: "haha Not found"
};

// POST NEW POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })

// REPLACE EXISTING POST WITH THE DATA CREATED ABOVE
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })

// console.log(data);

// DELETE EXISTING POST
http.delete('https://jsonplaceholder.typicode.com/posts/5', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
