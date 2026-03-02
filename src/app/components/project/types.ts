export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    link: string;
    github?: string;
    type: "portfolio" | "webapp" | "frontend" | "opensource" | "extension" | "npm" | "threejs" | "algorithm" | "placeholder";
    stats?: {
        label: string;
        value: string;
    }[];
    color: string;
    accentColor: string;
    featured?: boolean;
}
