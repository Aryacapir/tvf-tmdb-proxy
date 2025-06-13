// api/trending.js

module.exports = async (req, res) => {
  const apiKey = '05458cf40aa30c36be72aafe9d35d95e';
  const type   = req.query.type || 'movie';   // 'movie' یا 'tv'
  const time   = req.query.time || 'day';     // 'day' یا 'week'
  const url    = `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=${apiKey}&language=en-US`;

  try {
    const tmdbRes = await fetch(url);
    if (!tmdbRes.ok) {
      return res.status(tmdbRes.status).json({ error: `TMDB returned ${tmdbRes.status}` });
    }
    const data = await tmdbRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
