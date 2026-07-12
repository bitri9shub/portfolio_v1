type CardVariant = "primary" | "outlined"

const variantStyles: Record<CardVariant, string> = {
    "primary": "bg-neutral-100 text-black border border-4 border-black",
    "outlined": "bg-black text-white border border-4 border-white"
}

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    variant?: CardVariant;
}

function Card({ variant = 'primary', className, ...props }: CardProps) {
    return <div
        className={`p-5 font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${variantStyles[variant]} ${className}`}
        {...props}
    ></div>
}

export default Card