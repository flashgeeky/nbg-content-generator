# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add: `ANTHROPIC_API_KEY` with your API key value
   - Make sure it's available for Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to existing project or create new one

4. **Add Environment Variable**
   ```bash
   vercel env add ANTHROPIC_API_KEY production
   ```
   - Enter your Anthropic API key when prompted

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Environment Variable Setup

Your Anthropic API key must be set in Vercel:

**Via Dashboard:**
1. Go to Project Settings > Environment Variables
2. Add new variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...` (your actual API key)
   - Environments: Production, Preview, Development

**Via CLI:**
```bash
vercel env add ANTHROPIC_API_KEY
```

## Alternative Deployment Options

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variable**
   - Go to Site Settings > Build & Deploy > Environment
   - Add `ANTHROPIC_API_KEY`

### Deploy to Railway

1. Create account at [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Add environment variable: `ANTHROPIC_API_KEY`
4. Railway will auto-deploy

### Deploy to Render

1. Create account at [render.com](https://render.com)
2. Create new Web Service from GitHub
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add environment variable: `ANTHROPIC_API_KEY`

## Post-Deployment Checklist

- [ ] Verify the app loads correctly
- [ ] Test content generation with sample data
- [ ] Check all copy buttons work
- [ ] Test regenerate functionality
- [ ] Verify error handling displays correctly
- [ ] Test on mobile devices
- [ ] Monitor API usage in Anthropic Console
- [ ] Set up monitoring/analytics if needed

## Custom Domain Setup (Vercel)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS according to Vercel's instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Performance Monitoring

### Vercel Analytics
- Enable in Project Settings > Analytics
- Monitor real user performance metrics

### API Usage Monitoring
- Check Anthropic Console for API usage
- Set up billing alerts
- Monitor rate limits

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies in package.json
- Check build logs for specific errors

### API Key Issues
- Verify environment variable is set correctly
- Check API key has not expired
- Ensure key has proper permissions in Anthropic Console

### Slow Generation
- Claude API calls can take 20-30 seconds
- This is normal for content generation
- Consider adding streaming in future versions

### Rate Limiting
- Anthropic has rate limits on API calls
- Upgrade API plan if hitting limits
- Consider implementing request caching

## Security Best Practices

1. **Never commit API keys**
   - Always use environment variables
   - API keys should never be in source code
   - .env files are in .gitignore

2. **Use environment-specific keys**
   - Different keys for dev/staging/production
   - Easier to rotate and manage

3. **Monitor API usage**
   - Set up billing alerts in Anthropic Console
   - Monitor for unusual patterns

4. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

## Scaling Considerations

For high-volume usage (1000+ generations/month):

1. **API Rate Limits**
   - Upgrade to higher tier Anthropic plan
   - Implement request queuing

2. **Caching**
   - Cache similar requests
   - Use Redis or similar for caching layer

3. **Database**
   - Store generated content for reuse
   - Track usage analytics

4. **CDN**
   - Vercel provides CDN by default
   - Optimize static assets

## Support

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Anthropic Support: [support.anthropic.com](https://support.anthropic.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
