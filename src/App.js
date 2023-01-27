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
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      {' '}
      <div>
        <Helmet>
          <meta charSet='utf-8' />

          <meta
            name={data?.title}
            content={data?.body}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNPKubvc49DDL6siEuD8nk_01eLY38gpieXjJ14mETw&s'
          />
          <title>{data?.title}</title>
          <link
            rel='canonical'
            href={link}
          />
        </Helmet>
        <h1>{data?.title}</h1>
        <h1>{data?.body}</h1>
      </div>
    </div>
  );
};
export default ScoopRank;