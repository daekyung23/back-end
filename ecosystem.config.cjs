module.exports = {
  apps: [{
    name: 'server',
    script: './dist/server.js',
    env_production: {
      NODE_ENV: 'production'
    },
    interpreter: 'node',
    interpreter_args: '-r dotenv/config',
    node_args: '-r dotenv/config',
    env_file: '.env.production'
  }]
}