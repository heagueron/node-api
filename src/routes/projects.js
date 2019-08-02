import { Router } from 'express';

import { 
    createProject, 
    getProjects, 
    getProject, 
    deleteProject,
    updateProject } from '../controllers/project.controller';


const router = Router();

// all these come prefixed by /api/projects/ 

// CREATE
router.post('/create', createProject);

// GET ALL
router.get('/', getProjects);

// GET ONE /api/projects/:projectid
router.get('/:id', getProject);

// DELETE ONE /api/projects/:projectid
router.delete('/:id', deleteProject);

// UPDATE /api/projects/:projectid
router.put('/:id', updateProject);




export default router;