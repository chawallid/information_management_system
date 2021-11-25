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
import { getDataTeacher }  from '../../api/backend_helper'






const Manage_teacher = () => {
  const [data,setData] = useState([{
      id_teacher:"cmu001",
      designation_name:"นักวิขาการ",
      first_name:"ครูอังคณา (Angkana)",
      middle_name:"",
      last_name:"คงอยู่ยง (Khong Yu Yong)",
      department_name:"คณะบริหารธุรกิจ"
    },{
      id_teacher:"cmu002",
      designation_name:"นักวิขาการ",
      first_name:"ครูประเจษฐ์ (Pra Chet)",
      middle_name:"",
      last_name:"กำไล (Kamlai)",
      department_name:"คณะบริหารธุรกิจ"
    }]);

  useEffect(() =>{
    getDataTeacher("").then(function(result) {
      if(result.status){
        let tmp = result.data
        for ( let idx in result.data) {
          if(tmp[idx].id_teacher < 10){
            tmp[idx] = {
              id_teacher: "cmu00"+tmp[idx].id_teacher,
              designation_name: tmp[idx].designation_name,
              first_name: tmp[idx].first_name +"("+ tmp[idx].first_name_en+")",
              middle_name: tmp[idx].middle_name +"("+ tmp[idx].middle_name_en+")",
              last_name: tmp[idx].last_name +"("+ tmp[idx].last_name_en+")",
              department_name: tmp[idx].department_name
            }
          }else  if(tmp[idx].id_teacher < 100){
            tmp[idx] = {
              id_teacher: "cmu0"+tmp[idx].id_teacher,
              designation_name: tmp[idx].designation_name,
              first_name: tmp[idx].first_name +"("+ tmp[idx].first_name_en+")",
              middle_name: tmp[idx].middle_name +"("+ tmp[idx].middle_name_en+")",
              last_name: tmp[idx].last_name +"("+ tmp[idx].last_name_en+")",
              department_name: tmp[idx].department_name
            }
          }else if(tmp[idx].id_teacher > 100){
            tmp[idx] = {
              id_teacher: "cmu"+tmp[idx].id_teacher,
              designation_name: tmp[idx].designation_name,
              first_name: tmp[idx].first_name +"("+ tmp[idx].first_name_en+")",
              middle_name: tmp[idx].middle_name +"("+ tmp[idx].middle_name_en+")",
              last_name: tmp[idx].last_name +"("+ tmp[idx].last_name_en+")",
              department_name: tmp[idx].department_name
            }
          }
          
          console.log(tmp[idx])
        }        
        
        setData(tmp)

      }
    })
  },[])


  const columns = [{
    dataField: 'id_teacher',
    align: 'center',
    headerAlign: 'center',
    text: 'รหัสอาจารย์'
  }, {
    dataField: 'designation_name',
    align: 'center',
    headerAlign: 'center',
    text: 'ชื่อตำแหน่งวิชาการ'
  }, {
    dataField: 'first_name',
    align: 'center',
    headerAlign: 'center',
    text: 'ชื่อต้น'
  }, {
    dataField: 'middle_name',
    align: 'center',
    headerAlign: 'center',
    text: 'ชื่อกลาง'
  }, {
    dataField: 'last_name',
    align: 'center',
    headerAlign: 'center',
    text: 'นามสกุล'
  }, {
    dataField: 'department_name',
    align: 'center',
    headerAlign: 'center',
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
            <BootstrapTable keyField='id' data={ data } columns={ columns } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Manage_teacher
