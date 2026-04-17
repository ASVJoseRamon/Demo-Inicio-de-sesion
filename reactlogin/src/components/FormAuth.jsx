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

export default function AuthForm() {

  const { login } = useAuthStore
  const handlesubmit = (e) => {
    e.preventDefault();
    login(username, password)
  }

  return (
    <div className=" rounded-xl p-10 bg-emerald-200 hover:shadow-xl/50 shadow-xl flex justify-center">
      <form
  onSubmit={(e) => {
    e.preventDefault()
    form.handleSubmit()
    }}
>
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <h1>Iniciar sesión</h1>
        <h1>Registrar Usuario</h1>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" placeholder="Correo" className="bg-gray-50"/>
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
          <Input id="password" type="password" placeholder="••••••••" className="bg-gray-50"/>
        </Field>
        <ShBoton type="onSubmit">Ingresar</ShBoton>
      </FieldGroup>
    </FieldSet>
  </form>
        
    </div>
  )
}
