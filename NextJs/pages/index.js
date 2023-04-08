import React, { Component } from 'react'
//NEXT Js Routing
import Link from 'next/link'
import Router from 'next/router'

class IndexPage extends Component
{
	
	static async getInitialProps(context)
	{
		//example network requests
		const promise = new Promise((resolve, reject) =>
		{
			setTimeout(() =>
			{
				resolve({ appName: "Super App" })
			}, 5000);
		})
		return promise
	} 
	
	
	render()
	{
	return (
		<div>
			<h1>Main Page {this.props.appName }</h1>

			<Link href="/auth">
				<a>Auth Page</a>
			</Link>

			<button onClick = {() => Router.push('/auth')}>Go To Auth Page</button>
		</div>
	)}
}

export default IndexPage;
