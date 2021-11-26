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
  CForm,
  CProgress,
  CRow,
  CFormLabel,
  CModal,
  CFormInput,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CFormCheck,
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


import BootstrapTable from 'react-bootstrap-table-next';
import { getDataTeacher }  from '../../api/backend_helper'
import { CreateTeacher }  from '../../api/backend_helper'
import { DelTeacher }  from '../../api/backend_helper'


// CreateTeacher

const Manage_teacher = () => {
  const [visible, setVisible] = useState(false)



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

  function submit(event){
    event.preventDefault()
    // console.log("inputState" , event.target)
    // console.log("lastname" , event.target.lastname.value)
    let fromdata = {
      first_name:event.target.firstname.value ,
      middle_name:event.target.middlename.value ,
      last_name:event.target.lastname.value,
      first_name_en:event.target.firstname_en.value,
      middle_name_en:event.target.middlename_en.value,
      last_name_en:event.target.lastname_en.value,
      department_name:event.target.inputState.value,
      designation_name:event.target.designation_name.value,
     
    }
    CreateTeacher(fromdata).then(function(result){
      console.log("ggg",result.status)
      if(result.status){
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
            setVisible(false)
    
          }
        })
      }
    })

  }




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
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>เพิ่มข้อมูลอาจารย์</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
            <CRow>
              <CCol >
                  <CFormInput id="firstname" placeholder="ชื่อ"/>
              </CCol>
              <CCol >
                  <CFormInput id="middlename" placeholder="ชื่อกลาง"/>
              </CCol>
              <CCol >
                  <CFormInput id="lastname" placeholder="นามสกุล"/>
              </CCol>
            </CRow>
            <CRow className="mt-2">
              <CCol >
                  <CFormInput id="firstname_en" placeholder="firstname"/>
              </CCol>
              <CCol >
                  <CFormInput id="middlename_en" placeholder="middlename"/>
              </CCol>
              <CCol >
                  <CFormInput id="lastname_en" placeholder="lastname"/>
              </CCol>
            </CRow>
            
            <CRow className="mt-2">
              <CCol xs="auto">
                <CFormSelect id="inputState">
                  <option>ภาควิชาการบัญชี</option>
                  <option>ภาควิชาการเงิน</option>
                  <option>ภาควิชาการจัดการและการเป็นผู้ประกอบการ</option>
                  <option>ภาควิชาการตลาด</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mt-2">
              <CCol xs="auto">
                  <CFormInput id="designation_name" placeholder="ชื่อตำแหน่งวิชาการ"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <div class="d-flex flex-row-reverse">
                <CCol xs="auto">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    ปิด
                  </CButton>
                  <CButton type="submit" color="info">ยืนยัน</CButton>
                </CCol>
              </div>
            </CRow>
          </form>
        </CModalBody>
      
      </CModal>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol/>
            <CCol>
              <CButton onClick={() => setVisible(!visible)} color="info" type="submit">เพิ่มข้อมูลอาจารย์</CButton>
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
