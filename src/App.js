import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

// import { Row } from 'antd';
const ScoopRank = () => {
  const [data, setData] = useState([]);
  const headers = {};

  let val = true;
  useEffect(() => {
    if (val) {
      const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
      axios.get(baseURL, {}).then((response) => {
        setData(response.data);
      });

      val = false;
    }
  }, []);
  const link =
    'http://https://63bd-39-53-106-137.in.ngrok.io/scooprank:3000/ScoopRank/';
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>React app</title>
        <meta
          name='description'
          content='React application'
        />
      </Helmet>
      <h1>{data.title}</h1>
      <h1>{data.body}</h1>
    </>
  );
};
export default ScoopRank;
