export default ({app}) => {

  // 实现web title显示当前页面的title
  app.router.beforeEach((to, from, next) => {
    if(to.meta.title) {
      let title = `${to.meta.title} - ${app.head.title}`
      console.log(`${to.meta.title} - ${app.head.title}`)
      // document.title = title
      app.head.title = title
    }
    next()
  })
}
