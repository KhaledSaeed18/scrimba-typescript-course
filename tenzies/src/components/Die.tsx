import type { JSX } from "react"

type DieProps = {
    value: number
    isHeld: boolean
    hold: () => void
}

export default function Die(
    props: DieProps
): JSX.Element {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    )
}