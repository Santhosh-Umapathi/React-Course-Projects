import React from 'react'

const User = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.age}</p>
			
			<style jsx>{`
				div
				{
					border: 1px solid orange;
					box-shadow: 2px 2px black;
					margin: 20px auto;
					padding: 20px;
					text-align:center;
				}
			`}
			</style>

		</div>
	)
}

export default User;
