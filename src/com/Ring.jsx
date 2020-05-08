import React from 'react'

export default ({ radius, stroke, progress }) => {
	const normalizedRadius = radius - stroke * 2
	const circumference = normalizedRadius * 2 * Math.PI
	const strokeDashoffset = -circumference - (progress / 100) * circumference

	return (
		<div className='ring'>
			<svg height={radius * 2} width={radius * 2}>
				<circle
					r={normalizedRadius}
					cy={radius}
					cx={radius}
					fill='none'
					stroke='#c44d2b'
					stroke-width={stroke}
					stroke-linecap='round'
					opacity='0.25'
				/>
				<circle
					r={normalizedRadius}
					cy={radius}
					cx={radius}
					fill='none'
					stroke='#fff'
					stroke-width={stroke}
					stroke-linecap='round'
					style={{ strokeDashoffset }}
					strokeDasharray={circumference + ' ' + circumference}
				/>
			</svg>
		</div>
	)
}
