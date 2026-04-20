import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "/components/ui/field"
import { Input } from "/components/ui/input"
import ShBoton from "./ShBoton"
import useAuthStore from "../store/useAuthStore"
import { useForm } from "@tanstack/react-form"
import { AuthLoginSchema, validateAuth } from '../validations/AuthZod'


export default function AuthForm() {

  const { login } = useAuthStore();

  const form = useForm({
      defaultValues: { email: '', password: '' },
      onSubmit: ({value}) => {
        console.log('Datos enviados a la API:', value)
      },
  })

  return (
    <div>
    <form onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}>
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <h1>Iniciar sesión</h1>
        <h1>Registrar Usuario</h1>
        <form.Field
          name="email"
          validators={{
                  onSubmit: ({ value }) => {
            // Accedemos solo a la regla del email dentro del esquema
                  const result = AuthLoginSchema.shape.email.safeParse(value);
            // Si no tiene éxito, devolvemos el mensaje de error de Zod
                  return result.success ? undefined : result.error.errors[0].message;
                  },
                }}
          children = {(field) => (
            <div>
              <FieldLabel htmlFor={field.name}>Correo</FieldLabel>
              <Input 
                id={field.name} 
                name={field.name}
                type="text" 
                placeholder="Correo" 
                value={field.state.value} 
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="bg-gray-50"
              />
              <FieldDescription>
                Ingresa tu correo electronico
              </FieldDescription>
              
            </div>
          )}
        />
        <form.Field
          name="password"
          validators={{
              onSubmit: ({ value }) => {
            // Accedemos solo a la regla del email dentro del esquema
              const result = AuthLoginSchema.shape.password.safeParse(value);
            // Si no tiene éxito, devolvemos el mensaje de error de Zod
              return result.success ? undefined : result.error.errors[0].message;
            },
          }}
          children={(field) => (
            <div>
              <FieldLabel htmlFor={field.name}>Contraseña</FieldLabel>
              <Input 
                id={field.name}
                name={field.name}
                type="password"
                placeholder="••••••••" 
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="bg-gray-50"
              />
              <FieldDescription>
                Ingresa tu contraseña
              </FieldDescription>
            </div>
          )}
        />
        <ShBoton type="submit">Ingresar</ShBoton>
      </FieldGroup>
    </FieldSet>   
    </form>
    </div>
  )
}
