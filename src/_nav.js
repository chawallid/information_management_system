import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilBarcode,
  cilChart,
  cilClipboard,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Manage Teacher',
    to: '/manage_teachers',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Manage Course',
    to: '/manage_course',
    icon: <CIcon icon={cilBarcode} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Teaching Information',
    to: '/teaching_infomation',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: `Data Report`,
    to: '/data_report',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />
  }
]

export default _nav