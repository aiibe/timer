import React from 'react'

function _play(props) {
	return (
		<svg viewBox='0 0 448 512' {...props}>
			<path
				d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z'
				stroke='none'
			/>
		</svg>
	)
}

function _reset(props) {
	return (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				fill='none'
				stroke='#fff'
				strokeWidth={3}
				d='M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 100 18h0a9 9 0 009-9m0-9v6h-6'
			/>
		</svg>
	)
}

function _pause(props) {
	return (
		<svg viewBox='0 0 512 512' {...props}>
			<path
				d='M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zm176 0h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z'
				stroke='none'
			/>
		</svg>
	)
}

const Reset = React.memo(_reset)
const Play = React.memo(_play)
const Pause = React.memo(_pause)
export { Play, Reset, Pause }
