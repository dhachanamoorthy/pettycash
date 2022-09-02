import './FloatButton.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export const FloatButton=(props)=>{
    return(
        <div className='floatbutton-container' onClick={props.onClick}>
            <AddCircleIcon className='floatbutton'/>
        </div>
    )
}