import React from 'react'

export default function App() {
	return (
		<div className='clock-frame'>
			<div className='task'>
				<h3>Focus on this task</h3>
			</div>
			<div className='digits'>
				<div className='minutes'>00</div>
				<div>:</div>
				<div className='seconds'>00</div>
			</div>
			<div className='controls'>
				<button>Start</button>
				<button>Reset</button>
			</div>
		</div>
	)
}
