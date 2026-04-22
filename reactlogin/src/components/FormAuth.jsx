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
import { AuthLoginSchema } from '../validations/AuthZod'
import { useNavigate } from "react-router"


export default function AuthForm() {
  const login = useAuthStore( (state) => state.login);

  const form = useForm({
    defaultValues: { email: '', password: '' },
    onValidate: () => {},
    onSubmit: async ({ value }) => {
      console.log(value);
      console.log("Usuario: "+value.email);
      console.log("Contraseña: "+value.password);
      login(value.email, value.password);
      console.log("Token: "+value.token);
      console.log("Duracion: "+value.tokenDuration);
    }
  })

  return (
    <div>
    <form onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}>
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <h1>Iniciar sesión</h1>
        <h1>Registrar Usuario</h1>
        <form.Field
          name="email"
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
              { field.state.meta.errors.length > 0 ?
              <FieldDescription className="text-sm text-red-500 font-medium">
                {field.state.meta.errors.join(', ')}</FieldDescription> :
              <FieldDescription>Ingresa tu correo electronico</FieldDescription>
              }
            </div>
          )}
        />
        <form.Field
          name="password"
          validators={{
              onChange: ({ value }) => {
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
