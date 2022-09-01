import { FloatButton } from "../../components/FloatButton/FloatButton"
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <div className="card">
                <div className="name">
                    Income
                </div>
                <div className="value">
                    $40
                </div>
            </div>
            <div className="card">
                <div className="name">
                    Expense
                </div>
                <div className="value">
                    $40
                </div>
            </div>
            <FloatButton />
        </div>
    )
}