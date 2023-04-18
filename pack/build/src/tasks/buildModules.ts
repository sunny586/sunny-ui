export const buildModules = () => new Promise((resolve, reject) => {
  console.log('================这里是另外一个build buildModules task2')
  resolve(true)
})