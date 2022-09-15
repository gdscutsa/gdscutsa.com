import { LoaderFunction, redirect } from '@remix-run/cloudflare';
import { DISCORD_LINK } from '~/components/links';

export const loader: LoaderFunction = async () => {
  return redirect(DISCORD_LINK, { status: 301 });
};
