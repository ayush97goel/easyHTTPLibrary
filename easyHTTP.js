
/**
 * @author Jane Smith <jsmith@example.com>
 * @version v2.0.0
 * 
 */

class EasyHTTP {
  // GET POSTS
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(jsonData => resolve(jsonData))
        .catch(error => reject(error));
    })
  }

  // ADD NEW POST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(jsonData => resolve(jsonData))
        .catch(error => reject(error));
    });
  }

  // UPDATE SPECIFIC POST
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(jsonData => resolve(jsonData))
    })
      .catch(error => reject(error))
  }

  // DELETE SPECIFIC POST
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.text())
        .then(() => resolve("Post Deleted!!!"))
        .catch(error => reject(error));
    })
  }

}
