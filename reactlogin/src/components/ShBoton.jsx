import { Button } from "/components/ui/button"
export default function ShBoton({children, handleClick, ...props}) {
    return (
        <Button variant="outline" onClick={handleClick} {...props}>{children}</Button>
    );
}