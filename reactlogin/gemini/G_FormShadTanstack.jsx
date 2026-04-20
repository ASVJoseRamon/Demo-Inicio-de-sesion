"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "hookform/resolvers/zod"
import * as z from "zod"
import { useLogin } from "./useLogin" // El hook que creamos arriba

// Componentes de Shadcn
import { Button } from "/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "/components/ui/form"
import { Input } from "/components/ui/input"

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
})

export function LoginForm() {
  const { mutate, isLoading, isError, error } = useLogin();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  })

  function onSubmit(values) {
    // Disparamos la mutación de React Query
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="correo@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isError && <p className="text-red-500 text-sm">{error.message}</p>}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Iniciando sesión..." : "Entrar"}
        </Button>
      </form>
    </Form>
  )
}