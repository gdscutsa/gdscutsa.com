import type { LoaderFunction} from '@remix-run/cloudflare';
import { redirect } from '@remix-run/cloudflare';
import { DISCORD_LINK } from '~/constants/links';

export const loader: LoaderFunction = async () => {
  return redirect(DISCORD_LINK, { status: 301 });
};
