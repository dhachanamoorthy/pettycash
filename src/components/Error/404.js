import asset_404 from '../../assets/404.png';
import './Error.css'
export const Error_404 = () => {
    return (
        <div className="error">
            <img className="error-asset" src={asset_404} />
        </div>
    )
}