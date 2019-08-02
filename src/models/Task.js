import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import Project from './Project';

const Task = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

//Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id'});

export default Task;