import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Chat from '@mui/icons-material/Chat';

export let ListData1 = [
    {
        items: 'Profile',
        icon: <AccountCircleOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/profile'

    },
    {
        items: 'Groups',
        icon: <Groups2OutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/groups'


    },
    {
        items: 'Physicians',
        icon: <LocalHospitalOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/physicians'

    },
    {
        items: 'Subscriptions',
        icon: <QueueOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/subscriptions'

    }

]
export let ListData2 = [
    {
        items: 'Medical History',
        icon: <AccountCircleOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/medical-history'

    },
    {
        items: 'Prescription',
        icon: <MedicationLiquidOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/prescriptions'

    },
    {
        items: 'Vitals',
        icon: <MonitorHeartOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/vitals'

    },
    {
        items: 'Appointment',
        icon: <DateRangeOutlinedIcon sx={{ color: `white` }} />,
        path: '/dashboard/appointment'

    },
    {
        items: 'Chat',
        icon: <Chat sx={{ color: `white` }} />,
        path: '/dashboard/chat'

    }

]