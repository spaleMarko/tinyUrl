import { useEffect, useState } from 'react';
import axios from 'axios';

interface PopularDomain {
  _id: string;
  count: number;
}

function Admin() {
  const [popularDomains, setPopularDomains] = useState<PopularDomain[]>([]);

  useEffect(() => {
    const getPopularDomains = async () => {
      const response = await axios.get(
        'http://localhost:5000/admin/most-popular-domain'
      );

      setPopularDomains(response.data.mostPopularDomains);
    };

    getPopularDomains();
  }, []);

  return (
    <>
      <h1>Admin Dashboard</h1>
      <h2>The most popular domains in the last 24 hours</h2>

      <ul className='short-url-container'>
        {popularDomains &&
          popularDomains.map((domain) => (
            <li
              key={domain._id}
              className='short-url-link'
              style={{ marginBottom: '5px' }}
            >
              {domain._id} Number of clicks: {domain.count}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Admin;
