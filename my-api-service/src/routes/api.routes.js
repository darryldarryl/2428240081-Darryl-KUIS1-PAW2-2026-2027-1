import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import kosmetikcontroller from '../controllers/kosmetik.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)
router.get('/kosmetik/', kosmetikcontroller.index)
router.get('/kosmetik/:id', kosmetikcontroller.show)
router.post('/kosmetik', kosmetikcontroller.store)
router.put('/kosmetik/:id', kosmetikcontroller.update)
router.delete('/kosmetik/:id', kosmetikcontroller.delete)

export default router
