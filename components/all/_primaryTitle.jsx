const PrimaryTitle = ({ title, styles }) => {
    return (
        <h2 className={`font-medium uppercase text-xl ${styles}`}>{title}</h2>
    )
}

export default PrimaryTitle