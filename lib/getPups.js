import axios from 'axios';

const getPups = (callback) => {
  axios
    .get('https://dog.ceo/api/breeds/image/random/5')
    .then(data => callback(data))
    .catch(err => console.log(`Woops! Could not get pups: ${err}`))
}


export default getPups;