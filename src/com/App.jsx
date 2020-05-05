import React from 'react'
import { Play, Reset, Pause } from '../icons'

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
				<button className='button-rounded'>
					<Play className='icon-button' />
				</button>
				<button className='button-rounded'>
					<Reset className='icon-button' />
				</button>
			</div>
		</div>
	)
}
