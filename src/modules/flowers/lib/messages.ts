export interface FlowerRequest {
  type: 'flower';
  id: number;
  radius: number;
  petals: number;
  t: number;
  bottom: { r: number; g: number; b: number };
  middle: { r: number; g: number; b: number };
  top: { r: number; g: number; b: number };
}

export interface FlowerResponse extends FlowerRequest {
  image: ImageBitmap;
}

export interface StopRequest {
  type: 'stop';
}

export interface StopResponse extends StopRequest {
}
