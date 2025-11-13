import { useState, useMemo } from 'react'
import { useProfiles } from '../store/useProfiles'
import ProfileCard from '../components/ProfileCard'
import MapView from '../components/MapView'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const { profiles, search, setSearch, cityFilter, setCityFilter } = useProfiles()
  const [selected, setSelected] = useState(null)

  const cities = useMemo(() => [...new Set(profiles.map(p => p.city))], [profiles])

  const filtered = useMemo(() => {
    const s = search.toLowerCase()
    return profiles.filter(p => {
      const matchesCity = cityFilter === 'All' || p.city === cityFilter
      const matchesSearch = p.name.toLowerCase().includes(s) || p.title.toLowerCase().includes(s)
      return matchesCity && matchesSearch
    })
  }, [profiles, search, cityFilter])

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} city={cityFilter} setCity={setCityFilter} cities={cities} />
      {selected && selected.lat && (
        <div style={{ marginBottom: 16 }}>
          <MapView lat={selected.lat} lng={selected.lng} label={selected.name} />
        </div>
      )}
      <div className="card-grid">
        {filtered.map(p => (
          <ProfileCard key={p.id} p={p} onSummary={setSelected} />
        ))}
      </div>
    </div>
  )
}
