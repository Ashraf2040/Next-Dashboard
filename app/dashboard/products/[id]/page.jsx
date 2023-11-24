import React from 'react'
import styles from "./singleProduct.module.css"
import Image from 'next/image'
import { updateSingleProduct } from '@/app/lib/actions'
import { fetchSingleProduct } from '@/app/lib/data'
const SingleProductPage =async ({ params }) => {
  
  const { id } = params
  
  const product = await fetchSingleProduct(id)

  return (
    <div className={styles.container}>
          <div className={styles.infoContainer}>
              <div className={styles.imageContainer}>
                <Image src='/noproduct.jpg'  alt='' fill/>
              </div>
            {product.title}

      </div>
          <div className={styles.formContainer}>
        <form className={styles.form} action={updateSingleProduct}>
          
          <input type="hidden" name='id' value={product.id} />
              <label>Title</label>
              <input type="text" name='title' placeholder={product.title} />
              <label>Price</label>
              <input type="number" name='price' placeholder={product.price} />
              <label>Stock</label>
              <input type="number" name='stock ' placeholder={product.stock} />
              <label>Size</label>
              <input type="text" name='size' placeholder={product.size} />
              <label>Color</label>
              <textarea type="text" name='color' placeholder={product.color} />
              <label>Category</label>
              <select name="cat" id="cat">
                  <option value="kitchen">Kitchen</option>
                  <option value="computer">Computer</option>
                  <option value="phone">Phone</option>
              </select>
              <label>Description</label>
          <textarea name="desc"
            id="desc" 
            rows="10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </textarea>
                  <button>Update</button>
                  </form>
      </div>
    </div>
  )
}

export default SingleProductPage
