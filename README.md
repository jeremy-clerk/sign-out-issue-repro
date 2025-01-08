# Repro

Create `.env.local` and fill in per usual

Edit your `/etc/hosts` file and add: 
```hosts
127.0.0.1 apps.local
```
- Install deps
- Run dev
- Sign in
- Navigate to `http://localhost:3000/protected`
- Sign Out
- Console should loop with the log:
```dotenv
Rewrite triggered - request.headers origin: http://localhost:3000
Rewrite triggered - request.nextUrl.origin:  http://apps.local:3000
```

- `CTRL+C` in your terminal
- You should see the error: `Failed to proxy http://localhost:3000/clerk_1736356752998 [AggregateError: ] { code: 'ECONNREFUSED' }`

### Notes
- You won't see this behavior if you visit `http://apps.local:3000`
- Appears to occur when the request headers origin differs from the nextUrl origin.
- This is often the case when NextJS is deployed via certain providers. 