interface SectionHeadingProps {
    title: string;
    id?: string;
    variant?: "banner" | "inline";
}

function SectionHeading({ title, id, variant = "banner" }: SectionHeadingProps) {
    if (variant === "banner") {
        return (
            <div id={id} className="w-full bg-black my-10">
                <div className="container mx-auto py-8">
                    <h2 className="font-bold font-mono text-white text-3xl sm:text-4xl px-5">
                        <span className="inline-block border-b-3 border-white">
                            {title}
                        </span>
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div id={id} className="container mx-auto my-10">
            <h2 className="font-bold font-mono text-3xl sm:text-4xl px-5">
                <span className="inline-block border-b-3">
                    {title}
                </span>
            </h2>
        </div>
    );
}

export default SectionHeading;
