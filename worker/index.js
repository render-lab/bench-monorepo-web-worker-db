import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const pollMs = Number(process.env.POLL_MS || 5000);

async function tick() {
  try {
    await pool.query('select 1');
    console.log('worker: db ok, no jobs');
  } catch (err) {
    console.error('worker: db error', err.message);
  }
}

console.log('worker: started');
setInterval(tick, pollMs);
