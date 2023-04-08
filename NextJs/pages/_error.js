import React from 'react'
//NEXT Js Routing
import Link from 'next/link'

const ErrorBoundary = () => {
	return (
		<div>
			<h1>Something went wrong</h1>

			<Link href="/">
				<a>Go back</a>
			</Link>

		</div>
	)
}

export default ErrorBoundary;
