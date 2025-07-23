export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (data: { title: string; content: string }) => void;
}

export interface ButtonProps {
    title: string;
    size: string;
    shape: string;
}