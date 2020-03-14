const { checkSecurityKey } = require('./security.controller')



router.use(checkSecurityKey)

module.exports = router; 