import React from 'react'
import axios from 'axios';

export default function App() {

  const submit = () => {
    axios.post('https://dummy.restapiexample.com/api/v1/create', {
      firstName: 'mayur',
      lastName: 'ahir'
    })
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={submit}>submit</button>
    </div>
  )
}
