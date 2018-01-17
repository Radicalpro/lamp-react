import React from 'react'
import { Link } from 'react-router-dom'
import * as Api from './webapi'

export default class Demo01 extends React.Component {

	// constructor(props) {
	// 	super(props)
	// }

	componentDidMount() {
		Api.demo01(1).then((res) => {
			console.log(JSON.stringify(res))
		})
	}

	render() {
		return (
			<div>
				demo01
				<Link to={{
					pathname: '/demo02',
					state: {name: 'ty'}
				}}>demo02</Link>
			</div>
		)
	}
}