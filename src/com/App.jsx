import React, { useState, useRef } from 'react'
import { Play, Reset, Pause } from '../icons'

export default function App() {
	const interval = useRef()
	const [time, setTime] = useState(25 * 60)
	const [status, setStatus] = useState(false)

	function toggleState() {
		if (!status) {
			setStatus(true)
			interval.current = setInterval(() => {
				setTime((time) => time - 1)
			}, 1000)
		} else {
			setStatus(false)
			clearInterval(interval.current)
		}
	}

	return (
		<div className='clock-frame'>
			<div className='task'>
				<h3>Focus on this task</h3>
			</div>
			<div className='digits'>
				<div className='minutes'>00</div>
				<div>:</div>
				<div className='seconds'>{time}</div>
			</div>
			<div className='controls'>
				<button className='button-rounded' onClick={toggleState}>
					{status ? (
						<Pause className='icon-button' />
					) : (
						<Play className='icon-button' />
					)}
				</button>
				<button className='button-rounded'>
					<Reset className='icon-button' />
				</button>
			</div>
		</div>
	)
}
