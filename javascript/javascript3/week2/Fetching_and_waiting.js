let api = 'https://jsonplaceholder.typicode.com/users';
const areThereUsers = true;
let fetching = fetch(api).then(response => response.json());
let promiseToFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (areThereUsers) {
      resolve(fetching)
    } else {
      reject('There are no users !!!')
    }

  }, 3000);
});

promiseToFetch
  .then((Data) => {
    console.log(Data)
    return Data
  })
  .then((Data) => {
    let usersName = Data.map((user)=> user.name)
    console.log(usersName);
    return Data
  })
  .then((Data) => {
    let usersUserName = Data.map((user)=> user.username)
    console.log(usersUserName);
    return Data
  })
  .catch((rej) => console.log(rej))

