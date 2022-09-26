export function Paragraph(props) {
    const paragraphStyle = {
        color: props.color,
        fontSize: props.fontSize + "em",
        fontWeight: props.fontWeight,
    }

    return (
        <p style={paragraphStyle}>{props.content}</p>
    )
}