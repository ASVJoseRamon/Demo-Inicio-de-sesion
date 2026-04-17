import { Button } from "/components/ui/button"
export default function ShBoton({children, ...props}) {
    return (
        <Button variant="outline" {...props}>{children}</Button>
    );
}