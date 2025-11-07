import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the Basic Auth credentials from the request
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Check credentials - CHANGE THESE TO YOUR OWN!
    const validUser = process.env.AUTH_USERNAME || 'nbg-admin'
    const validPass = process.env.AUTH_PASSWORD || 'secure-password-2024'

    if (user === validUser && pwd === validPass) {
      return NextResponse.next()
    }
  }

  // If authentication fails, return 401 with WWW-Authenticate header
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
}
