import { ButtonProps } from "@/interfaces"
const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    const sizes = {
        "small": "text-sm p-1 mt-5",
        "medium": "text-base p-2 mt-5",
        "large": "text-lg p-3 mt-5",
    }
    return (
        <div>
            <button className={`${sizes[size]} ${shape} bg-amber-200 text-black`}>{title}</button>
        </div>
    )
}

export default Button