import React, { useState , useEffect } from 'react'

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
import { getAllInfomation }  from '../../api/backend_helper'







const Teaching_infomation = () => {
  const [data,setData] = useState([{
    id:"701101",
    course_name:"ภาษาอังกฤษ",
    credits:"3",
    section:"10",
    instructor:"ครูอังคณา คงอยู่ยง",
    manage:[
      <>
        <CButton color="info" type="submit">เพิ่มอาจารย์</CButton>
        <CButton color="warning" type="submit">แก้ไขอาจารย์</CButton>
        <CButton color="danger" type="submit">ลบอาจารย์</CButton>
      </>
    ]
  }]
  )

  useEffect(() =>{
    getAllInfomation("").then(function(result) {
      if(result.status){
        let tmp = result.data
        for ( let idx in result.data) {
          console.log(tmp[idx])
          tmp[idx]["manage"] = [
            <>
              <CButton color="info" type="submit">เพิ่มอาจารย์</CButton>
              <CButton color="warning" type="submit">แก้ไขอาจารย์</CButton>
              <CButton color="danger" type="submit">ลบอาจารย์</CButton>
            </>
          ]
        }        
        setData(tmp)

      }
    })
  },[])

  const columns = [{
    dataField: 'id',
    headerAlign: 'center',
    align: 'center',
    text: 'รหัสกระบวนวิชา'
  }, {
    dataField: 'course_name',
    headerAlign: 'center',
    align: 'center',
    text: 'ชื่อกระบวนวิชา'
  }, {
    dataField: 'credits',
    headerAlign: 'center',
    align: 'center',
    text: 'จำนวนหน่วยกิต'
  }, {
    dataField: 'section',
    headerAlign: 'center',
    align: 'center',
    text: 'ตอน (section)'
  }, {
    dataField: 'instructor',
    headerAlign: 'center',
    align: 'center',
    text: 'อาจารย์ผู้สอน'
  }, {
    dataField: 'manage',
    text: 'จัดการ',
    align: 'center',
    headerAlign: 'center',

  }];



  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          {/* <CRow>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol>
              <CButton color="info" type="submit">เพิ่มข้อมูลอาจารย์</CButton>
            </CCol>
          </CRow> */}
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Teaching_infomation
