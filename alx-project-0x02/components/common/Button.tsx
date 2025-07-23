import { ButtonProps } from "@/interfaces"
const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    return (
        <div>
            <button className={`${size} ${shape} bg-amber-200 text-black`}>{title}</button>
        </div>
    )
}

export default Button