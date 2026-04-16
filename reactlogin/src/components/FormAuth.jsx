import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "/components/ui/field"
import { Input } from "/components/ui/input"
import ShBoton from "./ShBoton"

export default function AuthForm() {
  return (
    <div className=" rounded-xl p-10 bg-emerald-200 hover:py-15 shadow-xl">
        <FieldSet className="w-full max-w-xs">
        <FieldGroup>
            <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>
                Choose a unique username for your account.
            </FieldDescription>
            </Field>
            <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
                Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
            </Field>
            <ShBoton>Ingresar</ShBoton>
        </FieldGroup>
        </FieldSet>

        
    </div>
  )
}
