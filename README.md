# Repro

Create `.env.local` and fill in per usual

- Install deps
- Run dev
- Sign in
- Navigate to `/protected`
- Sign Out
- In dev you'll see an error but the redirect will work. 
- In prod the redirect won't work

A deployed version is here: https://sign-out-issue-repro.vercel.app/

## Notes
If you sign out from a non-protected route it works. 

The issue only occurs when signing out from a "protected" route.
