import Link from 'next/link'
import Head from 'next/head'
// Components
import { GaryNavbar } from '../components/commonUI'
import { Navbar } from 'react-bootstrap';

export default function Schedule() {
    return (
		<>
			<Head>
				<title>Plan</title>
			</Head>

			<GaryNavbar userProfile={this.props.userProfile} onLogout={this.props.clearUserProfile}>
				<Navbar.Text>Current Quarter Schedule</Navbar.Text>
			</GaryNavbar>

			<div className="container">
				<h1>Coming Soon...</h1>
			</div>
		</>
	)
}