import { Elysia, t } from "elysia";

export const authController = new Elysia({ prefix: "/auth" })
.post(
  "/register",  //name
  async ({ body, set }) => {
    //   const { email, username, password }= body;
    try {
    } catch (error) {
      set.status = 400;
      return { success: false, error: "Email already exists" };
    }
  }
  // {
  //   body: t.Object({
  //     email: t.String({ format: "email" }),
  //     username: t.String(),
  //     password: t.String({ minLength: 8 }),
  //   }),
  // }
);