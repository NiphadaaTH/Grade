import { Elysia } from "elysia";
import { authMiddleware } from "../middlewares/auth.middleware";
import { auth } from "../libs/auth";

export const userController = new Elysia({ prefix: "/users" })
    .use(authMiddleware)
    .get("/", async ({ getCurrentUser, set }) =
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            set.status = 401;
            return { success: false, error: "Unauthorized" };
        }
        const users = await auth.getAllUsers();
        return { success: true, data: { users } };
    });
