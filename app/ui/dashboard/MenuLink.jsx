'use client'


import Link from "next/link";
import styles from "./menulink.module.css"
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {
    
    const pathname = usePathname()
    console.log(pathname)
  return (
    <div >
          <Link className={`${styles.container} ${pathname === item.path && styles.active}`} href={item.path}>
              {item.icon}
              {item.title}
          
          </Link>
    </div>
  )
};

export default MenuLink
