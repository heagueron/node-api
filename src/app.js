// Server code

import express, {json} from 'express';
import morgan from 'morgan';

// Import Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// Initializacion
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;