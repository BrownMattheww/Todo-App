export default function ToDo(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.completeBy}</p>
        </>
    )
}