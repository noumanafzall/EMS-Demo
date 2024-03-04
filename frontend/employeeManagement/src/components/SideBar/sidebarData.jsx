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
        to : "/adminDashboard"
    },
    {
        label : 'Employees',
        icon : <MdPeopleAlt /> ,
        to : "/admin/employees"
    },
    {
        label : 'Attendance',
        icon : <VscChecklist />,
        to : "/admin/attendace"
    },
    {
        label : 'Analytics',
        icon : <MdAnalytics />,
        to : "/admin/analytics"
    },
    {
        label : 'Recruitment',
        icon : <FaUserTie /> ,
        to : "/admin/recruitment"
    },
    {
        label : 'Weapons',
        icon : <GiPistolGun /> ,
        to : "/admin/weapons"
    },
    {
        label : 'Revenue',
        icon : <GiCash /> ,
        to : "/admin/revenue"
    },
    {
        label : 'Payrolls',
        icon : <RiExchangeDollarLine /> ,
        to : "/admin/payrolls"
    },
]


const supervisorData = [
    {
        label : 'Dashboard',
        icon : <GoHomeFill />,
        to : "/supervisorLogin"
    },
    {
        label : 'Employees',
        icon : <MdPeopleAlt /> ,
        to : "/admin/employees"
    },
    {
        label : 'Attendance',
        icon : <VscChecklist />,
        to : "/supervisorLogin"
    },
    {
        label : 'Weapons',
        icon : <GiPistolGun /> ,
        to : "/supervisorLogin"
    },
]

export default supervisorData

