interface ButtonProps {
    children: string;
    onClick: () => void;
    style?: object;
    type?: string;
}
declare function Button({ children, onClick, style, type }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button };
