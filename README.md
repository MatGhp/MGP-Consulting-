<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/dd36bde6-7117-4578-9cb8-e1b0cca7faff

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages with GitHub Actions.

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: every push to `main` (plus manual `workflow_dispatch`)
- Build output: `dist`

### Custom domain setup

1. Replace the placeholder value in `public/CNAME` with your real domain (for example: `www.yourdomain.com`).
2. In GitHub, open repository **Settings -> Pages** and confirm the source is **GitHub Actions**.
3. Configure your DNS records for GitHub Pages.
4. After DNS propagation, enable **Enforce HTTPS** in Pages settings.

If you are not using a custom domain, remove `public/CNAME` and use the repository Pages URL.

### Notes

- The workflow sets `VITE_BASE_PATH=/`, which is correct for custom-domain hosting.
- If you later need to use the default `*.github.io/<repo>` URL instead, set `VITE_BASE_PATH` to `/MGP-Consulting-/` in the workflow build step.

### Rollback

- Revert the last commit on `main` and trigger the workflow again.
- Or re-run a known-good previous workflow run from the Actions tab.
