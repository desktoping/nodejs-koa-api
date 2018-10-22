module.exports = ({ router }) => {
  router.get('/users', ctx => ctx.body = 'Welcome User')
  router.get('/users/:id', ctx => ctx.body = `Welcome ${ctx.params.id}`)
}