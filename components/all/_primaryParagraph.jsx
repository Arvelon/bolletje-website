const PrimaryParagraph = ({ text, styles }) => {
    return (
        <p className={`py-0.5 max-w-screen-md text-center ${styles}`}>{text}</p>
    )
}

export default PrimaryParagraph