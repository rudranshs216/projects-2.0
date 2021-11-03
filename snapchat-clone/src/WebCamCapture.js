import { RadioButtonUnchecked } from '@mui/icons-material';
import React, { useCallback, useRef,} from 'react'
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from "react-router-dom";
import "./WebCamCapture.css"


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebCamCapture() {
    const history = useHistory();
    const dispatch = useDispatch();
    const webCamRef = useRef(null);
    const capture = useCallback(
        () => {
            const imageSrc = webCamRef.current.getScreenshot(); 
            dispatch(setCameraImage(imageSrc));
            history.push("/preview"); 
        },
        [webCamRef],
    )
    return (
        <div className="webcamCapture">
        <Webcam 
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            ref={webCamRef}
            mirrored
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
        />
        <RadioButtonUnchecked 
            className="webcamCapture_button"
            onClick={capture}
            fontSize="large"
        />
        
            
        </div>
    )
}

export default WebCamCapture
