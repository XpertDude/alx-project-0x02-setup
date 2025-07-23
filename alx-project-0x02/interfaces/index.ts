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

export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps {
    id: number;
    name: string;
    username: string,
    email: string,
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
}