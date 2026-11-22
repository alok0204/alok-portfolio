import { Router } from 'express';
import { getAllProjects, getProjectById } from '../controllers/projectsController.js';

const router = Router();

router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);

export default router;
