export const withInstall = (comp) => {
  comp.install = (app) => {
    // 当组件没有设置name时，自动以文件名注册
    const name = comp.name || comp.__name
    // 注册组件
    app.component(name, comp)
  }
  return comp
}