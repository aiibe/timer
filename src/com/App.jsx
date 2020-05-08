import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Play, Reset, Pause } from '../icons'
import Ring from './Ring'

const defaultTime = 25 * 60

export default function App() {
	const interval = useRef()
	const [task, setTask] = useState('Focus on this task')
	const [time, setTime] = useState(defaultTime)
	const [status, setStatus] = useState(false)

	// Stop countdown
	useEffect(() => {
		if (time == 0) {
			clearInterval(interval.current)
			setStatus(false)
			setTime(defaultTime)
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

	// Reset
	function reset() {
		!status && setTime(defaultTime)
	}

	// Display
	const min = Math.floor(time / 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})

	const sec = (time % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})

	return (
		<div className='frame'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>
					{status
						? `${min}:${sec} running`
						: time !== defaultTime
						? `${min}:${sec} paused`
						: 'Pomoto'}
				</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>

			<div className='task'>
				<input
					type='text'
					value={task}
					onChange={editTask}
					title='Rename your task'
				/>
			</div>

			<div className='clock'>
				<Ring
					radius={150}
					stroke={10}
					progress={((defaultTime - time) * 100) / defaultTime}
				/>

				<div className='digits'>
					<div className='minutes'>{min}</div>
					<div className='separator'>:</div>
					<div className='seconds'>{sec}</div>
				</div>
			</div>
			<div className='controls'>
				<button
					className='button-rounded'
					onClick={toggleState}
					title='Play/Resume timer'
				>
					{status ? (
						<Pause className='icon-button' />
					) : (
						<Play className='icon-button' />
					)}
				</button>
				<button className='button-rounded' onClick={reset} title='Reset timer'>
					<Reset className='icon-button' />
				</button>
			</div>
		</div>
	)
}
