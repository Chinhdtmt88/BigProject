/* eslint-disable prettier/prettier */
const axios = require('axios').default;

const login = async (email, password) => {
  console.log(email, password);

  try {
    //return await axios.post('http://127.0.0.1:3000/api/v1/users/login');
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log('res=> ', res);
  } catch (err) {
    console.log(err);
  }
};

// eslint-disable-next-line no-undef
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-undef
  const email = document.getElementById('email').value;
  // eslint-disable-next-line no-undef
  const password = document.getElementById('password').value;
  login(email, password).then((result) => {
    console.log('result=> ', result);
  });
});
