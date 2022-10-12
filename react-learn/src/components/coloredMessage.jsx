export const ColoredMessage = (props) => {
    const { color, children } = props;
    const contentStyle = {
        color,
        fontsize: "20px"
    };
    return <p style={contentStyle}>{children}</p>
}