export interface Location {
  id: string
  name: string
  country: string
  lat: number
  lon: number
}

export const mockLocations: Location[] = [
  { id: 'london', name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
  { id: 'new-york', name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
  { id: 'tokyo', name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
  { id: 'sydney', name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
  { id: 'paris', name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
]
