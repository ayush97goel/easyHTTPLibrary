
/**
 * @author Ayush Goel <goel97ayush@gmail.com>
 * @version v2.0.0
 * 
 * Uncomment the respective line of code to check
 */

// ==========================================================================
//  uses easyHTTP library v1.0.0 from here after, please check right
// js file is included in index.html
// ==========================================================================

// const http = new easyHttp()

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

// Data required for put and post
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
// http.delete('https://jsonplaceholder.typicode.com/posts/5', function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// ==========================================================================
//  uses easyHTTP library v2.0.0 from here after, please check right
// js file is included in index.html
// ==========================================================================

const http = new EasyHTTP();
// CALLING GET METHOD
// http.get('https://jsonplaceholder.typicode.com/posts')
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// CALLING POST METHOD
// http.post('https://jsonplaceholder.typicode.com/posts', data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// CALLING PUT METHOD
// http.put('https://jsonplaceholder.typicode.com/posts/6', data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// CALLING DELETE METHOD
http.delete('https://jsonplaceholder.typicode.com/posts/9')
  .then(response => console.log(response))
  .catch(error => console.log(error));
