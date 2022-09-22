# gdscutsa.com

The Semi-Offical site of GDSC at UTSA! 

## Tools

This site runs on a few cool tools:

- [Remix (React Framework)](https://remix.run/)
- [TailwindCSS (A CSS in HTML Library)](https://tailwindcss.com/)

## Contributions

If you want to add a change, think of a new feature, or just generally want to help with development, don't be afraid to pull this repo and make a merge request. Or create an issue and we'll try to get on it (though it may take longer). It's really up to you :D.

### Installation

Cloning and setting up your envionment

```sh
# clone the repo
git clone https://github.com/gdscutsa/gdscutsa.com.git

# install node dependancies (make sure you have Node.js and npm installed)
npm install
```

### Wrangler

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

The main (production) branch can be seen at https://gdscutsa.com and the dev branch can be seen at https://dev.gdscutsa-com.pages.dev if deploying to this repo. All commits to this repo will be automatically built and deployed.
