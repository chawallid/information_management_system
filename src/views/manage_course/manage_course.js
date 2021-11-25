import React, { useState , useEffect } from 'react'
// import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
// import BootstrapTable from "react-bootstrap-table-next"

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
import { getDataCourse }  from '../../api/backend_helper'






const Manage_course = () => {
  const [data,setData] = useState([{
    id:"701101",
    course_name:"ภาษาอังกฤษ",
    credits:"3",
    section:"10",
    instructor:"ครูอังคณา",
    volume:"3",
    manage:[
      <>
        <CButton color="warning" type="submit">แก้ไขวิชา</CButton>
        <CButton color="danger" type="submit">ลบวิชา</CButton>
      </>
    ]
  }]) 

  useEffect(() =>{
    getdataCourse()
    // setData([])
  },[])

 

  function getdataCourse(){
    getDataCourse("").then(function(result) {
      if(result.status){
        let tmp = result.data
        for ( let idx in result.data) {
          console.log(tmp[idx])
          tmp[idx]["manage"] = [
            <>
              <CButton color="warning" type="submit">แก้ไขวิชา</CButton>
              <CButton color="danger" type="submit">ลบวิชา</CButton>
            </>
          ]
        }        
        setData(tmp)

      }
    })
  }

  
 
  const columns = [{
    dataField: 'id',
    align: 'center',
    headerAlign: 'center',
    text: 'รหัสกระบวนวิชา'
  }, {
    dataField: 'course_name',
    align: 'center',
    headerAlign: 'center',
    text: 'ชื่อกระบวนวิชา'
  }, {
    dataField: 'credits',
    align: 'center',
    headerAlign: 'center',
    text: 'จำนวนหน่วยกิต'
  }, {
    dataField: 'section',
    align: 'center',
    headerAlign: 'center',
    text: 'ตอน (section)'
  }, {
    dataField: 'volume',
    align: 'center',
    headerAlign: 'center',
    text: 'จำนวนนักศึกษาลงทะเบียน'
  }, {
    dataField: 'manage',
    align: 'center',
    headerAlign: 'center',
    text: 'จัดการ'
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
              <CButton color="info" type="submit">เพิ่มข้อมูลวิชา</CButton>
            </CCol>
          </CRow>
          <CRow className="mt-3">
            <BootstrapTable keyField='id' data={ data && data } columns={ columns } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Manage_course
