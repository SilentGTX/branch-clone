

import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'

import Navbar from '../../components/navbar/Navbar';





function Dashboard() {

    return (
        <div className='dashboard'>
            <Navbar />
        </div>
    )
}

export default Dashboard
