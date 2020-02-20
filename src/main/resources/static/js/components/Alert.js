import React,{useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


export function AlertSuccess(props) {
    const {alert, hide,} = props;

    // const [show, setShow] = useState(alert.visible);
    // if (!alert.visible) {
    //     return null;
    // }
        return (
            <>
                <Alert show={alert.visible} variant={alert.variant}>
                    <Alert.Heading>Внимание!</Alert.Heading>
                    <p>
                        {alert.text}
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button onClick={hide} variant="outline-success">
                            А теперь закрой меня
                        </Button>
                    </div>
                </Alert>


            </>
        );


}

