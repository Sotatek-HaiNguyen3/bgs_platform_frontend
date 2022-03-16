import { path } from 'ramda';

export default function (res: any) {
  const token = path(['data', 'token'], res) || '';
  localStorage.setItem('X-Token', `Bearer ${token}`);
}
