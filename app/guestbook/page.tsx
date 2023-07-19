import type { Metadata } from 'next';
import { auth } from 'lib/auth';
import { queryBuilder } from 'lib/planetscale';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function GuestbookPage() {

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
         guestbook
      </h1>
    </section>
  );
}
