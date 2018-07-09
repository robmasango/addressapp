const router = require('express').Router();
const requestHandler = require('./request-handler.js');

router.get('/address', requestHandler.getActiveAddresses);
router.get('/deleted', requestHandler.getDeletedAddresses);
router.post('/address', requestHandler.addAddress);
router.put('/address', requestHandler.updateAddress);
router.post('/delete', requestHandler.deleteAddress);

module.exports = router;
