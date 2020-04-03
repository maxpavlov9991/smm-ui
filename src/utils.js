/* global fetch */

export async function fetcher (path) {
  const res = await fetch(process.env.REACT_APP_HOST_API + path, {
    credentials: 'include'
  })
  const json = await res.json()
  return json
}
