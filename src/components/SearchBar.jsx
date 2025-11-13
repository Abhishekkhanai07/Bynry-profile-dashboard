export default function SearchBar({ search, setSearch, city, setCity, cities }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
      <input
        placeholder="Search by name or title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>All</option>
        {cities.map((c) => <option key={c}>{c}</option>)}
      </select>
    </div>
  )
}
