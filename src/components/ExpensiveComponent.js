import { memo } from 'react'

export const ExpensiveComponent = memo(function ExpensiveComponent() {
	let performanceNow = performance.now()
	while (performance.now() - performanceNow < 1000) {}
	return <div>I'm very slow</div>
})
