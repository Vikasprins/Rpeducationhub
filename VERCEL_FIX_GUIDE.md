# Vercel Deployment Fix Guide

## Issues Fixed

1. ✅ Created `vercel.json` - Proper Vercel configuration for monorepo
2. ✅ Created serverless function handler - `apps/api/index.js` for Vercel
3. ✅ Updated environment configuration - Better env var handling
4. ✅ Improved MongoDB connection - Better error handling and connection pooling
5. ✅ Added validation - Required env vars are now validated

## Files Modified

1. **`vercel.json`** - New - Vercel project configuration
2. **`apps/api/index.js`** - New - Serverless function handler
3. **`apps/api/src/config/env.js`** - Updated - Better env var validation
4. **`apps/api/src/config/db.js`** - Updated - Better MongoDB connection handling

## What You Need To Do On Vercel Dashboard

### Step 1: Set Environment Variables
Go to Project Settings → Environment Variables and add:

```
MONGO_URI: mongodb+srv://vikasprins15740_db_user:sU0AXxpVqIRpuvEc@students.tqwsfmr.mongodb.net/students?retryWrites=true&w=majority
JWT_SECRET: (use a strong random secret - NOT 'development-secret')
WEB_ORIGIN: https://your-domain.com (or Vercel domain)
ADMIN_USERNAME: admin
ADMIN_PASSWORD: Admin@12345
```

### Step 2: Update Deployment Settings
1. Go to Settings → General
2. Ensure **Root Directory** is set to `apps/api` 
3. Ensure **Build Command** is: `npm run build --prefix apps/api`
4. Ensure **Start Command** is: (can be empty, Vercel will auto-detect)

### Step 3: Redeploy
After setting environment variables:
- Click "Deployments"
- Click "..." next to latest deployment
- Select "Redeploy"

Or manually trigger with:
```bash
vercel --prod
```

## How The Fix Works

### Before (Local-only setup)
```
server.js → app.listen(4000) ❌ Doesn't work on Vercel
```

### After (Vercel-compatible)
```
api/index.js → exports handler function → works on Vercel ✅
server.js → still works locally for development
```

## Testing Locally

```bash
npm run dev         # Runs both web and api locally
npm run dev:api     # Runs just the API on port 4000
```

## Vercel Function Flow

1. Vercel invokes: `api/index.js` → default export
2. Handler receives: `(req, res)` 
3. App initializes: `createApp()` and MongoDB connection
4. Request routed: Through Express app
5. Response sent: Back to Vercel/client

## Common Issues & Solutions

### "MONGO_URI is required"
- [ ] Check Vercel environment variables are set
- [ ] Check variable names match exactly (case-sensitive)
- [ ] Redeploy after setting variables

### "Cannot find module"
- [ ] Ensure `npm install` ran for all workspaces
- [ ] Check `package.json` has correct dependencies

### "500 Internal Server Error" still appears
- [ ] Check Vercel deployment logs
- [ ] Verify MongoDB connection string is correct
- [ ] Check firewall allows Vercel IP ranges to MongoDB

### "Connection timeout"
- [ ] Check MongoDB network access allows Vercel IPs
- [ ] Add Vercel deployment region IPs to MongoDB whitelist

## Debugging

Check Vercel logs with:
```bash
vercel logs --prod
```

Or view in Vercel dashboard:
Functions → Select function → Logs tab
