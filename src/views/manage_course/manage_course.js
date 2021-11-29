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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'


import BootstrapTable from 'react-bootstrap-table-next';
import { getDataCourse }  from '../../api/backend_helper'
import { CreateCourse }  from '../../api/backend_helper'
import { DelCourse }  from '../../api/backend_helper'


// CreateCourse





const Manage_course = () => {
  const [visible, setVisible] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDel, setVisibleDel] = useState(false)

  const [selectData , setSelectData] = useState([])



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

  function submit(event){
    event.preventDefault()
    if(visible){
      console.log("submit add")
      // console.log("firstname" , event.target.firstname.value)
      // console.log("lastname" , event.target.lastname.value)
      let fromdata = {
        id_course:event.target.course_id.value ,
        course_name:event.target.course_name.value ,
        section:event.target.section.value,
        credits:event.target.credits.value,
        volume:event.target.volume.value,
        department:event.target.inputState.value,
        course_name_en:event.target.course_name_en.value
      }
      CreateCourse(fromdata).then(function(result){
        console.log("log",result)
        if(result.status){
          getDataCourse("").then(function(result) {
            if(result.status){
              let tmp = result.data
              for ( let idx in result.data) {
                console.log(tmp[idx])
                tmp[idx]["manage"] = [
                  <>
                    <CButton onClick={() => {handelEdit(tmp[idx])}} color="warning" type="submit">แก้ไขวิชา</CButton>
                    <CButton onClick={() => {handelDel(tmp[idx])}} color="danger" type="submit">ลบวิชา</CButton>
                  </>
                ]
              }        
              setData(tmp)
              setVisible(false)
      
            }
          })
        }

      })
    }else if(visibleEdit){
      console.log("submit edit" , selectData)
      console.log("firstname" , event.target.firstname.value)
      console.log("lastname" , event.target.lastname.value)
    }else if(visibleDel){
      console.log("submit del" , selectData)
      DelCourse("",selectData.id).then(function(result) {
        if(result.status){
          getdataCourse()
          setVisibleDel(false)
        }
      })
    }
  }

  function handelDel(value){
    setVisibleDel(true) 
    console.log("del",value)
    setSelectData(value)


  }

  function handelEdit(value){
    setVisibleEdit(!visibleEdit) 
    console.log("edit",value)
    setSelectData(value)
  }

 

  function getdataCourse(){
    getDataCourse("").then(function(result) {
      if(result.status){
        let tmp = result.data
        for ( let idx in result.data) {
          console.log(tmp[idx])
          tmp[idx]["manage"] = [
            <>
              <CButton onClick={() => {handelEdit(tmp[idx])}} color="warning" type="submit">แก้ไขวิชา</CButton>
              <CButton onClick={() => {handelDel(tmp[idx])}} color="danger" type="submit">ลบวิชา</CButton>
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
    dataField: 'department',
    align: 'center',
    headerAlign: 'center',
    text: 'ภาควิชา'
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
    <CModal visible={visibleDel} onClose={() => setVisibleDel(false)}>
        <CModalHeader onClose={() => setVisibleDel(false)}>
          <CModalTitle>ลบข้อมูลวิชา</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
            <CRow>
              <CCol xs="auto">
                  คุณเเน่ใจจะลบข้อมูลวิชานี้หรือไม่?
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <div class="d-flex flex-row-reverse">
                <CCol xs="auto">
                  <CButton color="secondary" onClick={() => setVisibleDel(false)}>
                    ปิด
                  </CButton>
                  <CButton type="submit" color="info">ยืนยัน</CButton>
                </CCol>
              </div>
            </CRow>
          </form>
        </CModalBody>
    </CModal>
    <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
        <CModalHeader onClose={() => setVisibleEdit(false)}>
          <CModalTitle>แก้ไขข้อมูลวิชา</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
          <CRow>
              <CCol className="auto" >
                <CFormInput id="course_id" value={selectData.id} placeholder="รหัสกระบวนวิชา"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol xs="auto">
                  <CFormInput id="course_name" value={selectData.course_name} placeholder="ชื่อกระบวนวิชา"/>
              </CCol>
              <CCol xs="auto">
                <CFormInput id="course_name_en"  value={selectData.course_name_en}  placeholder="ชื่อกระบวนวิชาภาษาอังกฤษ"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol xs="auto">
                <CFormSelect id="inputState">
                  <option>ภาควิชาการบัญชี</option>
                  <option>ภาควิชาการเงิน</option>
                  <option>ภาควิชาการจัดการและการเป็นผู้ประกอบการ</option>
                  <option>ภาควิชาการตลาด</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol xs="auto">
                  <CFormInput id="credits" value={selectData.credits} placeholder="จำนวนหน่วยกิต"/>
              </CCol>
              <CCol xs="auto">
                <CFormInput id="section" value={selectData.section} placeholder="ตอน (section)"/>
              </CCol>
              <CCol xs="auto">
                <CFormInput id="volume" value={selectData.volume} placeholder="จำนวนนักศึกษา"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <div class="d-flex flex-row-reverse">
                <CCol xs="auto">
                  <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                    ปิด
                  </CButton>
                  <CButton type="submit" color="info">ยืนยัน</CButton>
                </CCol>
              </div>
            </CRow>
          </form>
        </CModalBody>
    </CModal>
    <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>เพิ่มข้อมูลวิชา</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
            <CRow>
              <CCol className="auto" >
                <CFormInput id="course_id" placeholder="รหัสกระบวนวิชา"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol xs="auto">
                  <CFormInput id="course_name" placeholder="ชื่อกระบวนวิชา"/>
              </CCol>
              <CCol xs="auto">
                <CFormInput id="course_name_en" placeholder="ชื่อกระบวนวิชาภาษาอังกฤษ"/>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol xs="auto">
                <CFormSelect id="inputState">
                  <option>ภาควิชาการบัญชี</option>
                  <option>ภาควิชาการเงิน</option>
                  <option>ภาควิชาการจัดการและการเป็นผู้ประกอบการ</option>
                  <option>ภาควิชาการตลาด</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <CCol >
                  <CFormInput id="credits" placeholder="จำนวนหน่วยกิต"/>
              </CCol>
              <CCol >
                <CFormInput id="section" placeholder="ตอน (section)"/>
              </CCol>
              <CCol >
                <CFormInput id="volume"  placeholder="จำนวนนักศึกษา"/>
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
              <CButton onClick={() => setVisible(!visible)} color="info" type="submit">เพิ่มข้อมูลวิชา</CButton>
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
