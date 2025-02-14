import "../stylesheets/header.css";

export default function Header(props) {
    return (
        <header>
            <h2>{props.title}</h2>
        </header>
    )
}