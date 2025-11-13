import { useState } from 'react'
import { useProfiles } from '../store/useProfiles'
import styles from './Admin.module.css'

export default function Admin() {
  const { profiles, add, update, remove } = useProfiles()
  const [form, setForm] = useState({})
  const [editing, setEditing] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.title || !form.city || !form.country) {
      alert("Please fill all required fields")
      return
    }
    if (editing) update(editing, form)
    else add({ id: Date.now().toString(), ...form })
    setForm({})
    setEditing(null)
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.adminCard}>
        <h2 className={styles.heading}>
          {editing ? 'Edit Profile' : 'Add New Profile'}
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            placeholder="Name"
            value={form.name || ''}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <input
            placeholder="Title"
            value={form.title || ''}
            onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
          />
          <input
            placeholder="City"
            value={form.city || ''}
            onChange={(e) => setForm(f => ({ ...f, city: e.target.value }))}
          />
          <input
            placeholder="Country"
            value={form.country || ''}
            onChange={(e) => setForm(f => ({ ...f, country: e.target.value }))}
          />

          <button type="submit" className={styles.submitBtn}>
            {editing ? 'Update' : 'Add'}
          </button>
        </form>

        <h3 className={styles.subHeading}>Profiles List</h3>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.title}</td>
                  <td>{p.city}</td>
                  <td>
                    <button
                      className={`${styles.button} ${styles.secondary}`}
                      onClick={() => { setEditing(p.id); setForm(p) }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => remove(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
