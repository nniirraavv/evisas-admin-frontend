import { fetchAuthSession, JWT } from 'aws-amplify/auth';

export function hasTokenExpired(token: JWT) {
  if (!token) return true;
  return token?.payload?.exp && token?.payload?.exp * 1000 < Date.now();
}
export async function getUserToken() {
  try {
    const token = await fetchAuthSession();
    return token.tokens?.idToken?.toString() || '';
  } catch (error) {
    return '';
  }
}
