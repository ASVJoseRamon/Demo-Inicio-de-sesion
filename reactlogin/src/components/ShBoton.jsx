import { Button } from "/components/ui/button"
export default function ShBoton({children, onClick}) {
    return (
        <Button variant="outline" onClick={onClick}>{children}</Button>
    );
}