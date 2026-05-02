import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER || 'Vxrail';
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'Vxrail2026@';

function unauthorized() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="SweFOR — Restricted"',
    },
  });
}

export default function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization');

  if (!auth || !auth.startsWith('Basic ')) {
    return unauthorized();
  }

  const decoded = Buffer.from(auth.slice(6), 'base64').toString('utf-8');
  const sep = decoded.indexOf(':');
  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  if (user !== BASIC_AUTH_USER || pass !== BASIC_AUTH_PASSWORD) {
    return unauthorized();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(en|fr)/:path*'],
};
