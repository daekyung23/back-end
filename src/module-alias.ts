import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
  '@': path.join(__dirname, '..'),
  '@src': path.join(__dirname),
  '@config': path.join(__dirname, '..', 'config'),
  '@views': path.join(__dirname, 'views'),
  '@utils': path.join(__dirname, 'utils'),
  '@middlewares': path.join(__dirname, 'middlewares'),
  '@routes': path.join(__dirname, 'routers')
}) 