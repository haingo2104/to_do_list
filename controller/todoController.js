import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


const home = async (req , res) => {
    try {
        const todo = await prisma.my_Todo.findMany()
        return res.render('home.ejs' , {todo})
    } catch (error) {
        console.log(error);
    }
}


const CreateTodo = async (req, res) => {

    try {
        const { titre, contenu } = req.body

        switch (req.method) {
            case "GET": {
                return res.render('create.ejs')
            }
            case "POST": {
                await prisma.my_Todo.createMany({
                    data: {
                        titre,
                        contenu
                    }
                })
                return res.redirect('/')

            }
            default: {
                console.log("error");
            }
        }

    } catch (error) {
        console.log(error);
    }


}

const UpdateTodo = async (req, res) => {
    try {
        const { titre, contenu } = req.body;
        const id = parseInt(req.params.id);
        const todo = await prisma.my_Todo.findUnique({ where: { to_do_id: id } });
        
        switch (req.method) {
            case "GET": {
                return res.render('update.ejs', { todo });
            }
            case "POST": {
                await prisma.my_Todo.update({
                    where: {
                        to_do_id: id
                    },
                    data: {
                        titre,
                        contenu
                    }
                });
                return res.redirect('/');
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const viewTodo = async(req, res) => {
    try {
        
    const id = parseInt(req.params.id)
    const todo = await prisma.my_Todo.findUnique({where : { to_do_id : id}})

    return res.render('view.ejs', {todo})
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        await prisma.my_Todo.delete({where : {to_do_id:id}})
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}




export { CreateTodo, UpdateTodo, home , viewTodo, deleteTodo} 