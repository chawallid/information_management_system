import { del, get, post, put } from "./api_helper"

export const getDataCourse = data => get("/AllCourse", data)
export const getDataTeacher = data => get("/AllTeacher", data)
export const getAllInfomation = data => get("/AllInfomation", data)


