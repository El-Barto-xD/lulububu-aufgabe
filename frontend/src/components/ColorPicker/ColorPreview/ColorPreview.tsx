interface ColorFieldProps {
    rgb: number[];
}

export default function ColorPreview({ rgb }: ColorFieldProps) {
    const backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    return (
        <div
            className="color-picker__preview"
            style={{backgroundColor}}
        />
    );
}
