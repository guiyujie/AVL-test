export default function auth({ next, store }) {
  if (!localStorage.getItem("x-auth-token")) {
    return next({
      path: '/login'
    })
  }

  return next()
}