export const ADD_DATA = 'ADD_DATA'

export const addData = (data) => ({
    type : ADD_DATA,
    data : data++
})