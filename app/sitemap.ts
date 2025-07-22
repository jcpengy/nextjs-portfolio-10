// import { allBlogs } from 'contentlayer/generated';
const allBlogs = [];

export default async function sitemap() {
  const blogs = allBlogs.map(() => ({
    url: 'https://leerob.io/blog/',
    lastModified: ''
  }));

  const routes = ['', '/blog', '/guestbook', '/uses'].map(
    (route) => ({
      url: `https://leerob.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
