// api/trending.js
export default async function handler(req, res) {
  const apiKey = '05458cf40aa30c36be72aafe9d35d95e'; // کلید TMDB
  // نوع مدیا: movie یا tv
  const type = req.query.type || 'movie';
  // بازه زمانی: day یا week
  const time = req.query.time || 'day';

  const url = `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `TMDB returned ${response.status}` });
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
