export interface HeaderProps {
  searchIcon?: object;
  weatherDetail?: boolean;
  onPressSearch?: () => void;
  leftIcon?: boolean;
  rightIcon?: object;
  title: string;
  search?: boolean;
  value?: string;
  onChange?: (text: string) => void;
  onCancelPress?: () => void;
  onPressLeft?: () => void;
}

export interface WeatherImagesProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ImageProps {
  source: any;
  customStyle?: object;
}

export interface WeatherCardProps {
  city: string;
  date: string | number;
  time: string | number;
  temperature: number | string;
  heartIcon: object;
  weatherImages: WeatherImagesProps[];
  onPressWeatherCard: () => void;
  isLike?: boolean;
  onPressFaviouriteCard: () => void;
}

export interface WeatherDetailProps {
  date: string | number;
  time: string | number;
  temperature: number | string;
  weatherImages: WeatherImagesProps[];
  wind: number;
  humudity: number;
  visibility: number | string;
  pressure: number | string;
  dewPoint: number;
  currentCity: string;
}

export interface WeatherInfoProps {
  city: string;
  date: string | number;
  time: string | number;
  temperature: number | string;
  weatherImages: WeatherImagesProps[];
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface WeatherDataProps {
  clouds: Clouds;
  coord: Coord;
  dt: number;
  id: number;
  isLike: boolean;
  main: Main;
  name: string;
  weather: WeatherImagesProps[];
  wind: Wind;
  visibility: number;
  sys: Sys;
}
