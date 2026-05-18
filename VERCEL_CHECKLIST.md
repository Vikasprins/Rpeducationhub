# Vercel Deployment Checklist

## 🔧 Code Changes (COMPLETED)

- [x] Created `vercel.json` configuration
- [x] Created `apps/api/api/index.js` serverless handler
- [x] Updated `apps/api/src/config/env.js` with validation
- [x] Improved `apps/api/src/config/db.js` connection handling

## 🚀 Vercel Dashboard Setup (TODO)

**Project Settings → Environment Variables:**
- [ ] MONGO_URI: `mongodb+srv://vikasprins15740_db_user:sU0AXxpVqIRpuvEc@students.tqwsfmr.mongodb.net/students?retryWrites=true&w=majority`
- [ ] JWT_SECRET: [Generate a strong random secret]
- [ ] WEB_ORIGIN: [Your production domain or Vercel URL]
- [ ] ADMIN_USERNAME: `admin`
- [ ] ADMIN_PASSWORD: `Admin@12345`

**Project Settings → General:**
- [ ] Root Directory: `apps/api`
- [ ] Build Command: `npm run build --prefix apps/api`
- [ ] Install Command: `npm install --workspaces`

**Deployments:**
- [ ] Redeploy latest deployment OR
- [ ] Push to GitHub to trigger new deployment

## ✅ Verification

After deployment, test:
- [ ] Health check: `GET /health` → returns `{"ok":true}`
- [ ] API endpoint: `GET /api/dashboard` (or any other endpoint)
- [ ] Check Vercel logs for errors

## 📝 Environment Variable Notes

**JWT_SECRET** - Generate a secure random string:
```bash
# On Mac/Linux
openssl rand -base64 32

# On Windows PowerShell
[System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([System.Guid]::NewGuid().ToString())) -replace '[^a-zA-Z0-9]', ''
```

**WEB_ORIGIN** - Should match your frontend domain:
- Development: `http://localhost:3000`
- Production: `https://yourdomain.com`
- Vercel preview: `https://rpeducationhub-xxx.vercel.app`

## 🐛 If Still Getting Error

1. Check Vercel logs: `vercel logs --prod`
2. Verify all env vars are set correctly
3. Check MongoDB connection string is valid
4. Ensure MongoDB allows connections from Vercel
5. Redeploy after making changes

## 📚 Additional Resources

- See `VERCEL_FIX_GUIDE.md` for detailed explanation
- Vercel Docs: https://vercel.com/docs/functions/serverless-functions
- MongoDB Atlas Network Access: https://www.mongodb.com/docs/atlas/security-whitelist/
