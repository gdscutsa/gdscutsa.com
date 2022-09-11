import { LoaderFunction, redirect } from '@remix-run/cloudflare';

export const loader: LoaderFunction = () => {
  return redirect(
    'https://gdsc.community.dev/the-university-of-texas-at-san-antonio/#upcoming-events'
  );
};
