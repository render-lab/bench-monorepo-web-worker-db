import express from 'express';
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get('/health', async (_req, res) => {
  try {
    await pool.query('select 1');
    res.json({ status: 'ok', db: 'up' });
  } catch {
    res.status(500).json({ status: 'ok', db: 'down' });
  }
});

app.listen(port, () => console.log(`web listening on ${port}`));
