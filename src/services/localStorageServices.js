export const getToken = () => {
    return localStorage.getItem('token') || null
  }
  
  export const getRole = () => {
    return localStorage.getItem('role') || null
  }
  
  export const removeSession = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }
  
  export const setSession = (token, role) => {
    // console.log(token, role)
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
  }