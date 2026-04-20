import * as z from "zod";

export const AuthLoginSchema = z.object({
    email: z.string()
        .min(10)
        .email({ message: "Ingresa un correo válido"}),
    password: z.string()
        .min(8, { message: "Minimo 8 caracteres"})
        .max(20, { message: "Maximo 8 caracteres"})
})

export const validateAuth = (data) => {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }
  
  return {
    success: true,
    data: result.data,
  };
};

export default AuthLoginSchema;