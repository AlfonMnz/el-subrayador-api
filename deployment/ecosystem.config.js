module.exports = {
  apps : [{
    name   : "El subrayador",
    script : "npm run start",
    instances: 1,
    env: {
      PORT: 619
    },
    increment_var : 'PORT',
  }]
}
