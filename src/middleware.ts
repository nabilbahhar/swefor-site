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
      'WWW-Authenticate': 'Basic realm="SweFOR"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') || '';
  if (!auth.toLowerCase().startsWith('basic ')) return false;

  try {
    const decoded = atob(auth.slice(6).trim());
    const sep = decoded.indexOf(':');
    if (sep < 0) return false;
    const user = decoded.slice(0, sep);
    const pass = decoded.slice(sep + 1);
    return user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASSWORD;
  } catch {
    return false;
  }
}

export default function middleware(req: NextRequest) {
  if (!checkAuth(req)) {
    return unauthorized();
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|og-image.png|robots.txt|sitemap.xml|documents/.*).*)',
  ],
};
