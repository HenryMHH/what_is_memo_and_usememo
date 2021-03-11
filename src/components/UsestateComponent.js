import { useState } from 'react'

export function UsestateCmponent() {
	const [word, setWord] = useState()
	return (
		<div>
			<input onChange={(e) => setWord(e.target.value)} />
			<div>{word}</div>
		</div>
	)
}
