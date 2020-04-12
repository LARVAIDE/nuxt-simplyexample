export default function ({
  route,
  redirect
}) {
  const token = sessionStorage.getItem('token');
  if (!token && route.path !== '/') {
    redirect('/');
  }
  if (token === 'admin' && route.path === '/') {
    redirect('/Question');
  }
  if (token === 'usr' && route.path === '/') {
    redirect('/test');
  }
}
