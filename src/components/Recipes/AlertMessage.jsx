import React from 'react'
import Alert from 'react-bootstrap/Alert';


const AlertMessage = () => {

  return (
    <Alert variant="danger" style={{ marginTop: '2rem' }} className="text-center">
        <Alert.Heading>Sorry, you got an error!</Alert.Heading>
            <p> Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.</p>
    </Alert>
  )
}

export default AlertMessage