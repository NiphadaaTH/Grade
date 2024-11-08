import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { authController } from "./controllers/auth.controller";
import { gradeController } from "./controllers/grade.controller";
// import { userController } from "./controllers/user.controller";

export const setup = (app: Elysia) =>{
    return app
        .use(cors())
        .use(swagger({
            documentation: {
                info: {
                    title: 'Elysia Auth API',
                    version: '1.0.0'
                }
            }
        }))
        .use(authController)
        // .use(userController);
        .use(gradeController)
};
