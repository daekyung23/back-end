import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
  '@': path.join(__dirname, '..'),
  '@services': path.join(__dirname, 'services'),
  '@repositories': path.join(__dirname, 'repositories'),
  '@models': path.join(__dirname, 'models'),
  '@lib': path.join(__dirname, 'lib'),
  '@src': path.join(__dirname),
  '@config': path.join(__dirname, '..', 'config'),
  '@views': path.join(__dirname, 'views'),
  '@utils': path.join(__dirname, 'utils'),
  '@middlewares': path.join(__dirname, 'middlewares'),
  '@routes': path.join(__dirname, 'routes'),
  '@base': path.join(__dirname, 'base')
}) 
