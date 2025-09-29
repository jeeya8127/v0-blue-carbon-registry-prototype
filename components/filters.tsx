export function Filters() {
  return (
    <div className="rounded-lg border bg-card p-4 grid gap-3 sm:grid-cols-3">
      <select aria-label="Region" className="h-10 px-3 rounded-md border bg-white">
        <option>All Regions</option>
        <option>South Asia</option>
        <option>Southeast Asia</option>
        <option>East Africa</option>
      </select>
      <select aria-label="SDG Impact" className="h-10 px-3 rounded-md border bg-white">
        <option>All SDGs</option>
        <option>Life Below Water</option>
        <option>Climate Action</option>
        <option>No Poverty</option>
      </select>
      <select aria-label="Price" className="h-10 px-3 rounded-md border bg-white">
        <option>Any Price</option>
        <option>Under $8</option>
        <option>$8-$12</option>
        <option>$12+</option>
      </select>
    </div>
  )
}
