/*
 * @Author: wei_qx
 * @Date: 2021-09-04 13:29:53
 * @Description: 
 * @LastEditor: wei_qx
 * @LastEditTime: 2021-09-04 16:42:44
 */
module.exports = {
  base: '/',
  title: 'pray-wind',
  description: 'praywind‘s blog',
  themeConfig: {
    repo: 'https://wei-qx.github.io/',
    // https://wei-qx.github.io
    repoLabel: 'My GitHub',
    nav: [
      {
        text: 'home', link: '/'
      },
      {
        text: 'FirstBlog',
        link: '/blog/FirstBlog.md'
      }
    ],
    sidebar: [
      [ '/', '首页'],
      [ '/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
}
