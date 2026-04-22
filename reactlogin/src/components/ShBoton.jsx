import { Button } from "/components/ui/button"
export default function ShBoton({children, onClick,...props}) {
    return (
        <Button variant="outline" onClick={onclick} {...props}>{children}</Button>
    );
}