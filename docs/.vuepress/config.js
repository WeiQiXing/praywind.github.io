/*
 * @Author: wei_qx
 * @Date: 2021-09-04 13:29:53
 * @Description: 
 * @LastEditor: wei_qx
 * @LastEditTime: 2021-09-04 17:32:16
 */
module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: 'pray-wind',
  description: 'praywind‘s blog',
  themeConfig: {
    repo: 'https://github.com/wei-qx/wei-qx.github.io',
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
