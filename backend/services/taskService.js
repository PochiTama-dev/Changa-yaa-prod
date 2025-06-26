import { Task, Request, User, Role, Profession, Category, Scribbler, UsersProfession, UsersCategory, ScribblerImage } from '../sequelize/models/Associations.js';

export const getAllTasks = async () => {
    return await Task.findAll({
        include: [
            {
                model: Request,
                 include: [
                            { model: User, as: 'contractingUser', include: [{ model: Role }] },
                            { model: User, as: 'contractedUser', include: [{ model: Role }] },
                            {
                                model: Scribbler, include: [
                                    { model: User, include: [
                                                        { model: Role }, 
                                                        { model: UsersProfession, include: { model: Profession } }, 
                                                        { model: UsersCategory, include: { model: Category } }
                                                    ] },
                                    { model: Profession, include: [{ model: Category }] },
                                    { model: ScribblerImage }
                                ]
                            },
                            { model: Profession, include: [{ model: Category }] }
                        ]
            }
        ]
    });
};

export const getTaskById = async (id) => {
    return await Task.findByPk(id, {
        include: [
            {
                model: Request,
                 include: [
                            { model: User, as: 'contractingUser', include: [{ model: Role }] },
                            { model: User, as: 'contractedUser', include: [{ model: Role }] },
                            {
                                model: Scribbler, include: [
                                    { model: User, include: [
                                                        { model: Role }, 
                                                        { model: UsersProfession, include: { model: Profession } }, 
                                                        { model: UsersCategory, include: { model: Category } }
                                                    ] },
                                    { model: Profession, include: [{ model: Category }] },
                                    { model: ScribblerImage }
                                ]
                            },
                            { model: Profession, include: [{ model: Category }] }
                        ]
            }
        ]
    });
};

export const getTaskByRequestId = async (id_request) => {
  return await Task.findAll({
    where: { id_request },
    include: [
        {
            model: Request,
             include: [
                        { model: User, as: 'contractingUser', include: [{ model: Role }] },
                        { model: User, as: 'contractedUser', include: [{ model: Role }] },
                        {
                            model: Scribbler, include: [
                                { model: User, include: [
                                                    { model: Role }, 
                                                    { model: UsersProfession, include: { model: Profession } }, 
                                                    { model: UsersCategory, include: { model: Category } }
                                                ] },
                                { model: Profession, include: [{ model: Category }] },
                                { model: ScribblerImage }
                            ]
                        },
                        { model: Profession, include: [{ model: Category }] }
                    ]
        }
    ]
  });
};

export const createTask = async (task) => {
    return await Task.create(task);
};

export const updateTask = async (id, task) => {
    const [updated] = await Task.update(task, { where: { id } });
    if (updated) {
        return await Task.findByPk(id, {
            include: [
                {
                    model: Request,
                     include: [
                                { model: User, as: 'contractingUser', include: [{ model: Role }] },
                                { model: User, as: 'contractedUser', include: [{ model: Role }] },
                                {
                                    model: Scribbler, include: [
                                        { model: User, include: [
                                                            { model: Role }, 
                                                            { model: UsersProfession, include: { model: Profession } }, 
                                                            { model: UsersCategory, include: { model: Category } }
                                                        ] },
                                        { model: Profession, include: [{ model: Category }] },
                                        { model: ScribblerImage }
                                    ]
                                },
                                { model: Profession, include: [{ model: Category }] }
                            ]
                }
            ]
        });
    }
    return null;
};

export const deleteTask = async (id) => {
    return await Task.destroy({ where: { id } });
};
