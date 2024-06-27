import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:5000/shorten', {
      longUrl,
    });

    setShortUrl(`http://localhost:5000/${response.data.createdUrl.shortId}`);

    setLongUrl('');
  };

  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <a href='/' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='/admin/most-popular-domains'>Most popular domains</a>
          </li>
        </ul>
      </nav>

      <h1>Tiny Url</h1>

      <form onSubmit={submitHandler}>
        <input
          type='url'
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder='Enter Url'
          required
        />

        <button type='submit'>Submit</button>
      </form>

      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
