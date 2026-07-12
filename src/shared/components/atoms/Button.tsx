type ButtonVariant = "primary" 
    | "secondary" 
    | "outlined";

const variantStyles: Record<ButtonVariant, string> = {
    "primary": "bg-black text-white",
    "secondary": "bg-neutral-100 text-black",
    "outlined": "bg-neutral-100 text-black border border-2 border-black",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

function Button({ variant = "primary", className, ...props }: ButtonProps) {
    return <button className={`font-mono px-4 py-2 ${variantStyles[variant]} ${className ?? ""}`} {...props} />
}

export default Button