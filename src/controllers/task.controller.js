import Task from '../models/Task';


export async function createTask(req, res) {

    const { name, done, projectid } = req.body;

    let newTask = await Task.create({
        name,
        done,
        projectid
    },
    {
        fields: ['name', 'done', 'projectid']
    });
    
    return res.json({
        message: `Task ${name} created.`,
        data: newTask
    });
    

}


export async function getTasks(req, res) {

    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'],
        order: [
            ['id', 'DESC']
        ]
    });
    
    return res.json({
        data: tasks
    });
}

export async function getTask(req, res) {
    const { id } = req.params;

    const task = await Task.findOne({
        attributes: ['name', 'done', 'projectid', 'id'],
        where: {id}
    });
    return res.json({ data: task });
}

export async function deleteTask(req, res) {
    const { id } = req.params;

    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: "Task deleted",
        count: deleteRowCount
    });
}



export async function updateTask(req, res) {
    
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    const task = await Task.findOne({
        attributes: ['name', 'done', 'projectid', 'id'],
        where: {id}
    });
    if(task) {
        await task.update({
            name, done, projectid
        });
        return res.json({
            message: "Task updated"
        });
    } else {
        return res.status(500).json({
            message: `Something went wrong.`,
            data: {}
        });
    }

}

export async function getTasksByProject(req, res) {
    
    const { projectid } = req.params;
    console.log(projectid);
    const tasks = await Task.findAll({
        where: {projectid},
        attributes: ['id', 'projectid', 'name', 'done'],
    });
    
    return res.json({ data: tasks });
}