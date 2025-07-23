export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
    title: string;
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-3xl" | "rounded-full";
}