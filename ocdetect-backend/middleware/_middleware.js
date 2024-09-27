// middleware.js
import { NextResponse } from 'next/server';
import { auth } from './firebasecofig';

export function middleware(req) {
  const token = req.cookies.get('authToken');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}
