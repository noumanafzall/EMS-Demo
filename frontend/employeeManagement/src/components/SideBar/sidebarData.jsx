import { GoHomeFill } from 'react-icons/go'
import { MdPeopleAlt, MdAnalytics} from 'react-icons/md'
import {FaUserTie} from 'react-icons/fa'
import { VscChecklist } from 'react-icons/vsc'
import { GiCash, GiPistolGun } from 'react-icons/gi'
import { RiExchangeDollarLine } from 'react-icons/ri'
import { CgProfile } from "react-icons/cg"


export const adminData = [
    {
        label : 'Dashboard',
        icon : <GoHomeFill />,
        to : "/adminLogin"
    },
    {
        label : 'Employees',
        icon : <MdPeopleAlt /> ,
        to : "/supervisorLogin"
    },
    {
        label : 'Attendance',
        icon : <VscChecklist />,
        to : "/supervisorLogin"
    },
    {
        label : 'Analytics',
        icon : <MdAnalytics />,
        to : "/supervisorLogin"
    },
    {
        label : 'Recruitment',
        icon : <FaUserTie /> ,
        to : "/supervisorLogin"
    },
    {
        label : 'Weapons',
        icon : <GiPistolGun /> ,
        to : "/supervisorLogin"
    },
    {
        label : 'Revenue',
        icon : <GiCash /> ,
        to : "/supervisorLogin"
    },
    {
        label : 'Payrolls',
        icon : <RiExchangeDollarLine /> ,
        to : "/supervisorLogin"
    },
]


const supervisorData = [
    {
        label : 'Dashboard',
        icon : <GoHomeFill />,
        to : "/supervisorLogin"
    }
]

export default supervisorData

