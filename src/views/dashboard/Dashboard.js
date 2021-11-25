import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'


import BootstrapTable from 'react-bootstrap-table-next';


const Teaching_infomation = () => {
  const products = [];
  const columns = [{
    dataField: 'id',
    text: 'รหัสอาจารย์'
  }, {
    dataField: 'designation_name',
    text: 'ชื่อตำแหน่งวิชาการ'
  }, {
    dataField: 'first_name',
    text: 'ชื่อต้น'
  }, {
    dataField: 'designation_name',
    text: 'ชื่อกลาง'
  }, {
    dataField: 'designation_name',
    text: 'นามสกุล'
  }, {
    dataField: 'department_name',
    text: 'ชื่อภาควิชา'
  }];


  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol>
              <CButton color="info" type="submit">เพิ่มข้อมูลอาจารย์</CButton>
            </CCol>
          </CRow>
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ products } columns={ columns } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Teaching_infomation
