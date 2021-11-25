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
import { getDataCourse }  from '../../api/backend_helper'





const Data_report = () => {
  const [data,setData] = useState([])

  useEffect(() =>{
    getDataCourse("").then(function(result) {
      if(result.status){
        setData(result.data)
        console.log("filter", result.data)
      }
    })
  },[])

  

  
  const columns_teacher = [{
    dataField: 'teahcher',
    headerAlign: 'center',
    align: 'center',
    text: 'อาจารย์ผู้สอน'
  },{
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
  },{
    dataField: 'department',
    headerAlign: 'center',
    align: 'center',
    text: 'ภาควิชา'
  }, {
    dataField: 'section',
    headerAlign: 'center',
    align: 'center',
    text: 'ตอน (section)'
  }];

  const columns_coures = [{
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
  },{
    dataField: 'department',
    headerAlign: 'center',
    align: 'center',
    text: 'ภาควิชา'
  }, {
    dataField: 'section',
    headerAlign: 'center',
    align: 'center',
    text: 'ตอน (section)'
  }, {
    dataField: 'teahcher',
    headerAlign: 'center',
    align: 'center',
    text: 'อาจารย์ผู้สอน'
  }];


  const columns_coures_sort = [{
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
  },
  {
    dataField: 'department',
    headerAlign: 'center',
    align: 'center',
    text: 'ภาควิชา'
  }, {
    dataField: 'section',
    headerAlign: 'center',
    align: 'center',
    text: 'ตอน (section)'
  }, {
    dataField: 'teahcher',
    headerAlign: 'center',
    align: 'center',
    text: 'อาจารย์ผู้สอน'
  }];


  const columns_department = [
  {
    dataField: 'department',
    headerAlign: 'center',
    align: 'center',
    text: 'ภาควิชา'
  },{
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
    dataField: 'teahcher',
    headerAlign: 'center',
    align: 'center',
    text: 'อาจารย์ผู้สอน'
  }];


  



  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>ตามรายชื่ออาจารย์</CCardHeader>
        <CCardBody>
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns_teacher } />
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>ตามรหัสกระบวนวิชา</CCardHeader>
        <CCardBody>
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns_coures } />
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader> ตามเลขขึ้นต้นรหัสกระบวนวิชา (701, 702, 703 และ 705)</CCardHeader>
        <CCardBody>
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns_coures_sort } />
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>ตามชื่อภาควิชา</CCardHeader>
        <CCardBody>
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns_department } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Data_report
