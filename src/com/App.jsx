import React, { useState, useRef, useEffect } from 'react'
import { Play, Reset, Pause } from '../icons'

export default function App() {
	const interval = useRef()
	const [task, setTask] = useState('Focus on this task')
	const [time, setTime] = useState(25 * 60)
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

	// Edit task
	function editTask(event) {
		setTask(event.target.value)
	}

	console.log('render')

	return (
		<div className='clock-frame'>
			<div className='task'>
				<input type='text' value={task} onChange={editTask} />
			</div>
			<div className='digits'>
				<div className='minutes'>
					{Math.floor(time / 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}
				</div>
				<div className='separator'>:</div>
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
