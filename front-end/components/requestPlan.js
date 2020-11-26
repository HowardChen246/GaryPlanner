import { Modal, Button, Form } from 'react-bootstrap'

export default function Request(props) {
	return (
		<Modal
			{...props}
			size=""
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Request New Plan (Using Student SSO)
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className="mr-5 ">
					<Form.Group>
						<Form.Label htmlFor="username">
							TritonLink user name (or student PID)
						</Form.Label>
						<Form.Control type="text" id="username" name="username" />
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor="passowrd">Passowrd</Form.Label>
						<Form.Control type="password" id="password" name="password" />
					</Form.Group>

					<div style={{ textAlign: 'right' }}>
						<Button type="submit" value="submit" className="bg-orange mt-3">
							Sumbit
						</Button>{' '}
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	)
}