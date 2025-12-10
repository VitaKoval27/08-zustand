import { ChangeEvent } from "react"
import css from "./SearchBox.module.css"

interface SearchBoxProps {
    onSearch: (value: string) => void
    value: string

}

export default function SearchBox({ onSearch, value }: SearchBoxProps) {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
    }

    return (
        <input
            className={css.input}
            placeholder="Search..."
            defaultValue={value}
            onChange={handleOnChange}
            type="text"
        />
    )
}