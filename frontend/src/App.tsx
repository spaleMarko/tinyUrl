import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/admin/most-popular-domains'>
              Most popular domains
            </NavLink>
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
        <div className='short-url-container'>
          <p>Short URL:</p>
          <a href={shortUrl} className='short-url-link'>
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
