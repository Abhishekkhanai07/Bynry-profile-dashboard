import { useParams, Link } from 'react-router-dom'
import { useProfiles } from '../store/useProfiles'
import MapView from '../components/MapView'

export default function Detail() {
  const { id } = useParams()
  const { profiles } = useProfiles()
  const p = profiles.find(x => x.id === id)

  if (!p) return <p>Profile not found</p>

  return (
    <div>
      <img src={p.photo} alt={p.name} width="150" />
      <h2>{p.name}</h2>
      <p>{p.title}</p>
      <p>{p.about}</p>
      <p>{p.city}</p>
      {p.lat && <MapView lat={p.lat} lng={p.lng} label={p.name} />}
      <Link className='button-back' to="/">Back</Link>
    </div>
  )
}
