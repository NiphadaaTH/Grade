import { Elysia } from "elysia";
import { auth } from "../libs/auth";
import { jwt } from "@elysiajs/jwt";
import { bearer } from "@elysiajs/bearer";

export const authMiddleware = new Elysia()
    .use(jwt({
        name: 'jwt',
    }))
    .use(bearer())
    .derive(({ jwt, bearer }) =
        return {
            getCurrentUser: async () =
                if (!bearer) return null;
                try {
                    const payload = await jwt.verify(bearer);
                    if (!payload) return null;
                    const session = await auth.getSession(payload.sessionId);
                    if (!session) return null;
                    const user = await auth.getUser(session.userId);
                    return user;
                } catch {
                    return null;
                }
            }
        };
    });
