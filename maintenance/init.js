const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname,'..','.env') })
require('app-module-path').addPath(path.resolve(__dirname,'..'))
