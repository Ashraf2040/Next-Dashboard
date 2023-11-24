import React from 'react'
import styles from "./addUser.module.css"
import { addUser } from '@/app/lib/actions'
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder='username' name='username' required />
        <input autoComplete='off' type="email" placeholder='email' name='email' required />
        <input autoComplete='off' type="password" placeholder='password' name='password' required />
        <input type="number" placeholder='phone' name='phone' required />
        <select name="isAdmin" id="isAdmin">
          <option value={false} >is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          
        </select>
        <select name="isActive" id="isActive">
          <option value={true} >is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          
        </select>
        <textarea name="address" id="address"
          rows="16"
          placeholder='Address'>
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
