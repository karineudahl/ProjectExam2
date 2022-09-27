export function Paragraph(props) {
    const paragraphStyle = {
        fontSize: props.fontSize + "em",
        fontWeight: props.fontWeight,
    }

    return ( 
        <p style={paragraphStyle}>{props.content}</p>
    )
}