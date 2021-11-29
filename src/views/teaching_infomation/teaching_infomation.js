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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'


import BootstrapTable from 'react-bootstrap-table-next';
import { getAllInfomation }  from '../../api/backend_helper'
import { getDataTeacher }  from '../../api/backend_helper'
import { UpdateInfomation }  from '../../api/backend_helper'
import { updateInfomationDate }  from '../../api/backend_helper'

import { getAllCourseMonThu }  from '../../api/backend_helper'
import { getAllCourseTuFri }  from '../../api/backend_helper'
import { getAllCourseWed }  from '../../api/backend_helper'





// export const getAllCourseMonThu = data => get("/AllCourseMonThu", data)
// export const getAllCourseTuFri = data => get("/AllCourseTuFri", data)
// export const getAllCourseWed = data => get("/AllCourseWed", data)








const Teaching_infomation = () => {
  const [visible, setVisible] = useState(false)
  const [valueSelect, setValueSelect] = useState("")

  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDel, setVisibleDel] = useState(false)
  const [selectData , setSelectData] = useState([])
  const [visibleDate, setVisibleDate] = useState(false)


  const [data,setData] = useState([])
  const [dataTeacher,setDataTeacher] = useState([])

  function submit(event){
    event.preventDefault()
    if(visible){
      if(event.target.workload.value + selectData.sumload <= 100){
        UpdateInfomation( { load: event.target.workload.value, name: event.target.inputState.value },selectData.id).then(function(result) {
          if(result.status){
            getAllInfomation("").then(function(result) {
              if(result.status){
                let tmp = result.data
                for ( let idx in result.data) {
                  console.log(tmp[idx])
                  tmp[idx]["manage"] = [
                    <>
                      <CButton onClick={() => handelAdd(tmp[idx])} color="info" type="submit">เพิ่มอาจารย์</CButton>
                      <CButton onClick={() => handelDate(tmp[idx])} color="warning" type="submit">แก้ไขวันที่</CButton>
  
                      {/* <CButton onClick={() => handelEdit(tmp[idx])} color="warning" type="submit">แก้ไขอาจารย์</CButton> */}
                      <CButton onClick={() => handelDel(tmp[idx])} color="danger" type="submit">ลบอาจารย์</CButton>
                    </>
                  ]
                  let name_teacher = ""
                  let sum_load = 0
                  for (let idx_name in tmp[idx]["instructor"]){
                    console.log("ggg",tmp[idx]["instructor"][idx_name]["load"])
                    sum_load = sum_load + parseInt(tmp[idx]["instructor"][idx_name]["load"])
                    if(idx_name < 1){
                      name_teacher = name_teacher + tmp[idx]["instructor"][idx_name]["name"]
                    }else{
                      name_teacher = name_teacher +","+ tmp[idx]["instructor"][idx_name]["name"]
        
                    }
                  }
                  tmp[idx]["instructor"]  =  name_teacher
                  tmp[idx]["sumload"]  = sum_load
                  // console.log(tmp[idx])   
                }     
                setData(tmp)
              }
            })
            setVisible(!visible)
          }
        })
      }else{
        console.log("sum load over")
      }
      
      // console.log("submit add")
      // console.log("sumload" ,  event.target.workload.value)
      // console.log("lastname" , event.target.lastname.value)
    }else if(visibleEdit){
      console.log("submit edit" , selectData)
      console.log("firstname" , event.target.firstname.value)
      console.log("lastname" , event.target.lastname.value)
    }else if(visibleDel){
      console.log("submit del" , selectData)
    }else if(visibleDate){
      let fromdata = {
        date : event.target.inputState.value,
        time : event.target.inputState2.value,
        id_course : selectData.id_course
      }
      console.log("submit update" , fromdata)
      updateInfomationDate(fromdata , selectData.id).then(function(result){
        console.log('check',result)
        if(result.status){
          getAllInfomation("").then(function(result) {
            if(result.status){
              let tmp = result.data
              for ( let idx in result.data) {
                console.log(tmp[idx])
                tmp[idx]["manage"] = [
                  <>
                    <CButton onClick={() => handelAdd(tmp[idx])} color="info" type="submit">เพิ่มอาจารย์</CButton>
                    <CButton onClick={() => handelDate(tmp[idx])} color="warning" type="submit">แก้ไขวันที่</CButton>

                    {/* <CButton onClick={() => handelEdit(tmp[idx])} color="warning" type="submit">แก้ไขอาจารย์</CButton> */}
                    <CButton onClick={() => handelDel(tmp[idx])} color="danger" type="submit">ลบอาจารย์</CButton>
                  </>
                ]
                let name_teacher = ""
                let sum_load = 0
                for (let idx_name in tmp[idx]["instructor"]){
                  console.log("ggg",tmp[idx]["instructor"][idx_name]["load"])
                  sum_load = sum_load + parseInt(tmp[idx]["instructor"][idx_name]["load"])
                  if(idx_name < 1){
                    name_teacher = name_teacher + tmp[idx]["instructor"][idx_name]["name"]
                  }else{
                    name_teacher = name_teacher +","+ tmp[idx]["instructor"][idx_name]["name"]
      
                  }
                }
                tmp[idx]["instructor"]  =  name_teacher
                tmp[idx]["sumload"]  = sum_load
                // console.log(tmp[idx])   
              }     
              setData(tmp)
            }
          })
          setVisibleDate(false)
          }
        })
    }
  }

  

  function handelDel(value){
    setVisibleDel(!visibleDel) 
    console.log("del",value)
    setSelectData(value)


  }
  function handelAdd(value){
    setVisible(true) 
    console.log("add",value)
    setSelectData(value)


  }
  function handelDate(value){
    setVisibleDate(true) 
    console.log("handelDate",value)
    setSelectData(value)
  }

  function handelEdit(value){
    setVisibleEdit(!visibleEdit) 
    console.log("edit",value)
    setSelectData(value)
  }
  function updateTime(event){
    setValueSelect(event.target.value)
    console.log("value" , valueSelect)

  }


  useEffect(() =>{
    getAllInfomation("").then(function(result) {
      if(result.status){
        let tmp = result.data
        for ( let idx in result.data) {
          console.log(tmp[idx])
          tmp[idx]["manage"] = [
            <>
              <CButton onClick={() => handelAdd(tmp[idx])} color="info" type="submit">เพิ่มอาจารย์</CButton>
              <CButton onClick={() => handelDate(tmp[idx])} color="warning" type="submit">แก้ไขวันที่</CButton>
              {/* <CButton onClick={() => handelEdit(tmp[idx])} color="warning" type="submit">แก้ไขอาจารย์</CButton> */}
              <CButton onClick={() => handelDel(tmp[idx])} color="danger" type="submit">ลบอาจารย์</CButton>
            </>
          ]
          let name_teacher = ""
          let sum_load = 0
          for (let idx_name in tmp[idx]["instructor"]){
            console.log("ggg",tmp[idx]["instructor"][idx_name]["load"])
            sum_load = sum_load + parseInt(tmp[idx]["instructor"][idx_name]["load"])
            if(idx_name < 1){
              name_teacher = name_teacher + tmp[idx]["instructor"][idx_name]["name"]
            }else{
              name_teacher = name_teacher +","+ tmp[idx]["instructor"][idx_name]["name"]

            }
          }
          tmp[idx]["instructor"]  =  name_teacher
          tmp[idx]["sumload"]  = sum_load
          console.log(tmp[idx])   
        }    
         
        setData(tmp)

      }
    })
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
        
        setDataTeacher(tmp)

      }
    })

  },[])

  const columns = [{
    dataField: 'id',
    headerAlign: 'center',
    align: 'center',
    text: 'ลำดับ'
  },{
  dataField: 'id_course',
  headerAlign: 'center',
  align: 'center',
  text: 'รหัสกระบวนวิชา'
  },
  {
    dataField: 'course_name',
    headerAlign: 'center',
    align: 'center',
    text: 'ชื่อกระบวนวิชา'
  },
  {
    dataField: 'department',
    headerAlign: 'center',
    align: 'center',
    text: 'ภาควิชา'
  },
  {
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
    dataField: 'date',
    headerAlign: 'center',
    align: 'center',
    text: ' วันที่ทำการสอน'
  },
  {
    dataField: 'time',
    headerAlign: 'center',
    align: 'center',
    text: ' เวลาทำการสอน'
  }, {
    dataField: 'manage',
    text: 'จัดการ',
    align: 'center',
    headerAlign: 'center',

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
              <CCol >
                <CFormSelect id="inputState">
                    {dataTeacher.map((data,idx)=>(
                      <>
                      <option>{data.first_name}</option>
                      </>
                    ))}
                </CFormSelect>
              </CCol>
              <CCol >
                <CFormInput id="workload"  placeholder="น้ำหนักภาระงาน"/>
                <>รวม {selectData.sumload}</>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <div class="d-flex flex-row-reverse">
                <CCol xs="auto">
                  <CButton color="secondary" onClose={() => setVisibleEdit(false)}>
                    ปิด
                  </CButton>
                  <CButton type="submit" color="info">ยืนยัน</CButton>
                </CCol>
              </div>
            </CRow>
          </form>
        </CModalBody>
    </CModal>
    <CModal visible={visibleDate} onClose={() => setVisibleDate(false)}>
        <CModalHeader onClose={() => setVisibleDate(false)}>
          <CModalTitle>แก้ไขข้อมูลวิชา</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
            <CRow>
              <CCol >
                วันที่ทำการสอน
              </CCol >
              <CCol >
                <CFormSelect id="inputState" onChange={updateTime} value={valueSelect} >
                    <option >{"(Mon - Thu)"}</option>
                    <option >{"(Tue-Fri)"}</option>
                    <option >{"(Wed)"}</option>
                </CFormSelect>
              </CCol>
              <CCol >
                เวลาที่ทำการสอน
              </CCol >
              <CCol >
                <CFormSelect id="inputState2">
                  {valueSelect==="(Wed)"?(
                    <>
                      <option>{"08.00 – 11.00 น."}</option>
                      <option>{"13.00 – 16.00 น."}</option>
                    </>
                  ):(
                    <>
                    <option>{"08.00 – 09.30 น."}</option>
                    <option>{"09.30 – 11.00 น."}</option>
                    {/* <option>{"11.00 – 12.30 น."}</option> */}
                    <option>{"13.00 – 14.30 น."}</option>
                    <option>{"14.30 – 16.00 น."}</option>
                    <option>{"16.00 – 17.30 น."}</option>
                    <option>{"17.30 – 19.00 น."}</option>
                    </>
                  )}
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className={"mt-3"}>
              <div class="d-flex flex-row-reverse">
                <CCol xs="auto">
                  <CButton color="secondary" onClose={() => setVisibleDate(false)}>
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
          <CModalTitle>เพิ่มอาจารย์</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form  className="row align-items-center" onSubmit={submit} >
            <CRow>
              <CCol>
                <CFormSelect id="inputState">
                    {dataTeacher.map((data,idx)=>(
                      <>
                      <option>{data.first_name}</option>
                      </>
                    ))}
                </CFormSelect>
              </CCol>
              <CCol >
                <CFormInput id="workload"  placeholder="น้ำหนักภาระงาน"/>
                <>รวม {selectData.sumload}</>
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
         
          <CRow className="mt-2">
            <BootstrapTable keyField='id' data={ data } columns={ columns } />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Teaching_infomation
