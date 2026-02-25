# Hostinger Deployment Guide

This guide will help you deploy your React application to Hostinger successfully.

## Prerequisites
- Hostinger hosting account
- FTP/SFTP access or File Manager access
- Node.js installed locally

## Step 1: Build Your Application

Run the build command in your project directory:

```bash
npm run build
```

This will create a `dist` folder with all your production files.

## Step 2: Upload Files to Hostinger

### Option A: Using File Manager (Recommended for beginners)
1. Log in to your Hostinger control panel (hPanel)
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` folder (or your domain's root folder)
4. Delete all existing files in the folder (if any)
5. Upload **all contents** from your `dist` folder:
   - `index.html`
   - `assets/` folder
   - `.htaccess` file
   - `404.html`
   - `_redirects`
   - `FavIcon.png`
   - Any other files in the `dist` folder

### Option B: Using FTP/SFTP
1. Get your FTP credentials from hPanel → **Files** → **FTP Accounts**
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect to your Hostinger account
4. Navigate to `public_html`
5. Upload all contents from the `dist` folder

## Step 3: Verify .htaccess File

Make sure the `.htaccess` file is in the root of your `public_html` folder. This file is crucial for React Router to work properly.

If you can't see `.htaccess`:
- In File Manager, click on **Settings** (gear icon) and enable "Show hidden files"
- The file starts with a dot (.), making it hidden by default

## Step 4: Clear Browser Cache

After deployment:
1. Clear your browser cache (Ctrl + Shift + Delete)
2. Or use incognito/private mode to test

## Step 5: Test Your Routes

Visit these URLs to confirm everything works:
- `https://yourdomain.com/`
- `https://yourdomain.com/book`
- `https://yourdomain.com/treatments`
- `https://yourdomain.com/about`
- `https://yourdomain.com/contact`

All routes should work without showing "404 Page Not Found"

## Troubleshooting

### Still seeing 404 errors?

1. **Check .htaccess location**: Must be in `public_html` root
2. **Check .htaccess content**: Should contain RewriteEngine rules
3. **Verify mod_rewrite is enabled**: Contact Hostinger support if needed (it's usually enabled by default)
4. **Check file permissions**: `.htaccess` should be 644

### Assets not loading?

1. Check that the `assets` folder uploaded correctly
2. Clear browser cache
3. Check browser console for errors (F12)

### Need to redeploy?

Every time you make changes:
1. Run `npm run build` locally
2. Delete old files from `public_html`
3. Upload new files from `dist` folder

## Important Notes

- Always upload from the `dist` folder, NOT your source code
- Don't upload `node_modules` to the server
- The `.htaccess` file must be in the same directory as `index.html`
- Make sure your domain is pointing to the correct folder in Hostinger

## Quick Deployment Checklist

- [ ] Run `npm run build`
- [ ] Log in to Hostinger hPanel
- [ ] Go to File Manager
- [ ] Navigate to `public_html`
- [ ] Delete old files
- [ ] Upload all files from `dist` folder
- [ ] Verify `.htaccess` is present
- [ ] Clear browser cache
- [ ] Test all routes

## Support

If you continue to experience issues:
1. Contact Hostinger support
2. Verify mod_rewrite module is enabled
3. Check error logs in hPanel → **Advanced** → **Error Logs**

Your site should now be live and working at your domain!
