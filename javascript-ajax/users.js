const list = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log(xhr.status);
  console.log(xhr.response);
  xhr.response.forEach(user => {

    const li = document.createElement('li');
    li.textContent = user.name;
    list.appendChild(li);
  });
});
xhr.send();
