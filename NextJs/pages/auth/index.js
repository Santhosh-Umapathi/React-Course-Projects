import React from 'react'

import User from '../../components/User'

const AuthIndexPage = (props) => {
	return (
		<div>
			<h1>Auth Index Page { props.appName}</h1>

			<User name="NEXT Js" age="new" />
			
		</div>
	)
}

AuthIndexPage.getInitialProps = async (context) =>
{
	
	const promise = new Promise((resolve, reject) =>
	{
		setTimeout(() =>
		{
			resolve({ appName: "Super App (Auth)" })
		}, 5000);
	})
	

	return promise
}
	

export default AuthIndexPage;
