import React from 'react'

export default class Demo02 extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name: props.location.state?  props.location.state.name: 'demo02'
		}
	}

	render(){
		return(
			<div>
				demo02------{this.state.name}
			</div>
		)
	}
}