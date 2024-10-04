import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
  const secretKey = 'yourSecretKey'; // Replace with your own secret key
  const options = {
    expiresIn: '1h', // Token expiration time
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

module.exports = {
  generateToken,
};
