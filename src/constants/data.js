import {
    FcPieChart,
    FcOk,
    FcCancel,
    FcHighPriority
} from 'react-icons/fc'

import { TbCircle, TbCircleDashed, TbAntennaBars5, TbAntennaBars4, TbAntennaBars3, TbAntennaBars1 } from "react-icons/tb";

export const status = [
    {
        id: '0',
        Symbol: TbCircleDashed,
        title: 'Backlog'
    },
    {
        id: '1',
        Symbol: TbCircle,
        title: 'Todo'
    },
    {
        id: '2',
        Symbol: FcPieChart,
        title: 'In progress'
    },
    {
        id: '3',
        Symbol: FcOk,
        title: 'Done'
    },
    {
        id: '4',
        Symbol: FcCancel,
        title: 'Cancelled'
    }
];

export const Priority = [
    {
        id: '0',
        Symbol: TbAntennaBars1,
        title: 'No priority'
    },
    {
        id: '1',
        Symbol: FcHighPriority,
        title: 'Urgent'
    },
    {
        id: '2',
        Symbol: TbAntennaBars5,
        title: 'High'
    },
    {
        id: '3',
        Symbol: TbAntennaBars4,
        title: 'Medium'
    },
    {
        id: '4',
        Symbol: TbAntennaBars3,
        title: 'Low'
    }
];
