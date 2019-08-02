import Project from '../models/Project';



export async function getProjects(req, res) {

    try{
        const projects = await Project.findAll();
    
        return res.json({
            data: projects
        });
    } catch(err){
        return res.status(500).json({
            message: `Something went wrong.`,
            data: {}
        });
    }

}

export async function getProject(req, res) {

    const { id } = req.params;

    const project = await Project.findOne({
        where: {
            id
        }
    });
    return res.json({
        data: project
    });

} 


export async function deleteProject(req, res) {

    const { id } = req.params;

    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: "Project deleted",
        count: deleteRowCount
    });

} 

export async function updateProject(req, res) {
    
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const project = await Project.findOne({
        where: {
            id
        }
    });
    if(project) {
        await project.update({
            name, priority, description, deliverydate
        });
        return res.json({
            message: "Project updated"
        });
    } else {
        return res.status(500).json({
            message: `Something went wrong.`,
            data: {}
        });
    }
}


export async function createProject(req, res) {
    //console.log('Receiving your kind petition ...');
    //console.log(req.body);


    const { name, priority, description, deliverydate } = req.body;
    try{
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },
        {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if(newProject) {
            return res.json({
                message: `Project ${name} created.`,
                data: newProject
            });
        }
    } catch(err) {
        return res.status(500).json({
            message: `Something went wrong.`,
            data: {}
        })
    } 
}


