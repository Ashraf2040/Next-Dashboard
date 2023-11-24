import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import styles from "./users.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import { fetchUser } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const Page = searchParams?.page || 1;
  console.log(Page);

  const { count, users } = await fetchUser(q, Page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="   Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className={styles.user}>
                <Image
                  src={user.img || "/noavatar.png"}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                {user.username}
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" value={user.id} name="id" />

                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
