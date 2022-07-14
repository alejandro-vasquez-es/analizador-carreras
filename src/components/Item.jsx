import React from 'react'

export const Item = ({ course }) => {

	const { id, credits, text, requiredCourses, creditsRequired } = course;

	return (
		<div className='flex flex-row shadow-md overflow-hidden rounded m-2 bg-neutral-600 '>
			<div className='bg-neutral-400 items-center flex flex-col'>
				<p className='px-1 bg-neutral-500 flex-1 items-center flex'>{id}</p>
				<p className='px-1 flex-1 items-center flex'>{credits}</p>
			</div>
			<p className='text-center grow align-middle mx-2'>{text}</p>
			{
				(requiredCourses.length > 0 || creditsRequired != null) &&
				<div className='flex flex-col bg-neutral-500 items-center'>
					{(requiredCourses.length > 0) &&
						<ul className='flex flex-col px-1 items-center flex-1'>
							{requiredCourses.map((requiredCourse, i) => (
								<li
									key={i}
									className='flex-1 min-w-0'
								>
									{requiredCourse}
								</li>)
							)
							}
						</ul>
					}
					{(creditsRequired != null) &&
						<p className='px-1 flex-1'>{creditsRequired}</p>
					}
				</div>

			}
		</div>
	)
}
