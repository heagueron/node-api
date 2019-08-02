import { Router } from 'express';

import { 
    createTask,
    getTasks,
    deleteTask,
    getTask,
    updateTask,
    getTasksByProject
} from '../controllers/task.controller'

const router = Router();

// /api/task/
router.post('/', createTask);

router.get('/', getTasks);

router.get('/:id', getTask);

router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

// /api/tasks/project/projectid
router.get('/project/:projectid', getTasksByProject);

export default router;