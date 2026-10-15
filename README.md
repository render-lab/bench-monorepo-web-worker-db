# Seed: web + worker + Postgres monorepo

Three pieces in one repo: a `web` Express service, a `worker` background process,
and a shared Postgres dependency (`DATABASE_URL`). The canonical "I need a web
service, a background worker, and a database with minimal DevOps" case. No deploy
config.

```bash
npm install
DATABASE_URL=postgres://... npm -w web start
DATABASE_URL=postgres://... npm -w worker start
```
