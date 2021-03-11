import { useState } from 'react'
import { ExpensiveComponent } from './components/ExpensiveComponent'
import { NormalComponent } from './components/NormalComponent'
import { UsestateCmponent } from './components/UsestateComponent'

function App() {
	const [word, setWord] = useState()
	return (
		<div className="App" style={{ fontSize: '1.5rem' }}>
			<input onChange={(e) => setWord(e.target.value)} />
			<div>{word}</div>
			<UsestateCmponent />
			<NormalComponent />
			<ExpensiveComponent />
			<div>kwpogkowekgo</div>
		</div>
	)
}

export default App
