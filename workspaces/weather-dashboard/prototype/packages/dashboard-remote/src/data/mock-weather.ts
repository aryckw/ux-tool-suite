export interface Location {
  id: string
  name: string
  country: string
  lat: number
  lon: number
}

export interface HourlyReading {
  time: string
  temp: number
  condition: string
}

export interface DailyReading {
  day: string
  high: number
  low: number
  condition: string
  emoji: string
}

export interface WeatherReading {
  location: Location
  current: {
    temp: number
    feelsLike: number
    condition: string
    humidity: number
    windSpeed: number
    uvIndex: number
    high: number
    low: number
  }
  hourly: HourlyReading[]
  daily: DailyReading[]
}

export const mockWeather: WeatherReading = {
  location: { id: 'london', name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
  current: {
    temp: 72, feelsLike: 69, condition: 'Partly Cloudy',
    humidity: 65, windSpeed: 12, uvIndex: 4, high: 76, low: 58
  },
  hourly: Array.from({ length: 24 }, (_, i) => ({
    time: `${String(i).padStart(2, '0')}:00`,
    temp: 58 + Math.round(Math.sin((i - 6) * Math.PI / 12) * 14 + 14),
    condition: i > 6 && i < 20 ? 'Sunny' : 'Clear'
  })),
  daily: [
    { day: 'Mon', high: 76, low: 58, condition: 'Partly Cloudy', emoji: '⛅' },
    { day: 'Tue', high: 79, low: 61, condition: 'Sunny', emoji: '☀️' },
    { day: 'Wed', high: 68, low: 55, condition: 'Rainy', emoji: '🌧️' },
    { day: 'Thu', high: 65, low: 52, condition: 'Cloudy', emoji: '☁️' },
    { day: 'Fri', high: 71, low: 57, condition: 'Sunny', emoji: '☀️' },
    { day: 'Sat', high: 74, low: 59, condition: 'Partly Cloudy', emoji: '⛅' },
    { day: 'Sun', high: 77, low: 62, condition: 'Sunny', emoji: '☀️' },
  ]
}
