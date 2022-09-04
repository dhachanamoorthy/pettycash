import asset_404 from '../../assets/404.png';
import './Error.css'
export const Error404 = () => {
    return (
        <div className="error">
            <img className="error-asset" alt="404" src={asset_404} />
        </div>
    )
}