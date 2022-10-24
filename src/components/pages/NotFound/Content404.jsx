/**
 * The content of the NotFound Page
 * file: Content404.jsx
 */

import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom'
import img404 from "../../../assets/le.png";
import './NotFound.scss'

function Content404() {
    return (
        <div className="error">
            <div className="content-error">
                <div className="e404">
                    <span>4</span>
                    <img src={img404} alt="Error" />
                    <span>4</span>
                </div>
                <h2>Xin lỗi vì trang bạn tìm hiện không có!<br />
                    Vui lòng quay lại trang chủ!
                </h2>
                <Link to={'/'}>
                    <RefreshIcon className='undo' />
                </Link>
                <p>Quay lại</p>
            </div>
        </div>
    )
}

export default Content404
