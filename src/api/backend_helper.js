import { del, get, post, put } from "./api_helper"

export const getDataCourse = data => get("/AllCourse", data)
export const getDataTeacher = data => get("/AllTeacher", data)
export const getAllInfomation = data => get("/AllInfomation", data)
export const UpdateInfomation = (data , id )=> put(`/updateInfomationtest:${id}`, data)
export const updateInfomationDate = (data , id )=> put(`/updateInfomationDate:${id}`, data)

export const CreateCourse = (data) => post(`/createCourse`,data)
export const CreateTeacher = (data) => post(`/createTeacher` ,data)

export const DelCourse = (data , id )=> del(`/delCourse:${id}`, data)
export const DelTeacher = (data , id )=> del(`/delTeacher:${id}`, data)



