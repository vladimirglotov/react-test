// export const createError = (error) => {
//   const errorNode = document.createElement('div')
//   errorNode.classList.add('error')
//   email.current.classList.add('input-error')
//   password.current.classList.add('input-error')
//   errorNode.innerHTML = error
//   button.current.parentNode.insertBefore(errorNode, button.current)
// }

// export const removeError = () => {
//   const error = button.current.parentNode.querySelector('.error')
//   if (error) {
//     error.parentNode.removeChild(error)
//     email.current.classList.remove('input-error')
//     password.current.classList.remove('input-error')
//   }
// }

export const createError = (error, email, password, nodeToInsertBefore) => {
  const errorNode = document.createElement('div')
  errorNode.classList.add('error')
  email.classList.add('input-error')
  if (password) {
    password.classList.add('input-error')
  }
  errorNode.innerHTML = error
  nodeToInsertBefore.parentNode.insertBefore(errorNode, nodeToInsertBefore)
}

 export const removeError = (email, password) => {
  const error = email.parentNode.querySelector('.error')
  if (error) {
    error.parentNode.removeChild(error)
    email.classList.remove('input-error')
    if (password) {
      password.classList.remove('input-error')
    }
  }
}