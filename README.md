# dwel campers

Static website for dwel campers.

## Deployment to Cloudflare Pages

This project is set up to be deployed via [Cloudflare Pages](https://pages.cloudflare.com/) connected to the GitHub repository.

### Setup Instructions

1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create application**.
3.  Select the **Pages** tab and click **Connect to Git**.
4.  Select the `dwell` repository.
5.  Configure the build settings:
    *   **Project name:** `dwel-campers` (or your preference)
    *   **Production branch:** `main`
    *   **Framework preset:** `None`
    *   **Build command:** (Leave empty)
    *   **Build output directory:** `.` (This serves the files from the root directory)
6.  Click **Save and Deploy**.

### Local Development

To run the site locally, you can simply open `index.html` in your browser.
