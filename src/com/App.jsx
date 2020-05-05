import React, { useState, useRef, useEffect } from 'react'
import { Play, Reset, Pause } from '../icons'

export default function App() {
	const interval = useRef()
	const [time, setTime] = useState(3)
	const [status, setStatus] = useState(false)

	// Stop countdown
	useEffect(() => {
		if (time == 0) {
			clearInterval(interval.current)
			setStatus(false)
		}
	}, [time])

	// Start/Resume
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

	console.log('render')

	return (
		<div className='clock-frame'>
			<div className='task'>
				<h3>Focus on this task</h3>
			</div>
			<div className='digits'>
				<div className='minutes'>
					{Math.floor(time / 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}
				</div>
				<div>:</div>
				<div className='seconds'>
					{(time % 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}
				</div>
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
