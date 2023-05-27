import axios from 'axios';

const LoginComponent = () => {
  const handleLogin = async () => {
    const username = 'root';
    const password = 'redhat';
    const credentials = btoa(`${username}:${password}`);
    
    try {
      const response = await axios.post('http://localhost:8080/registration//adduser', {}, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      // Handle the response, e.g., store the token/session identifier in state or local storage
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};

export default LoginComponent;
