export interface Place {
    id: string,
    name: string,
    address: string,
	phone: string,
    latlng: Location,
    viewport: Viewport, 
    attributions: string,
    types: string[]
}

export interface Location {
    latitude: number;
    longitude: number
}

export interface Viewport {
    southWest: Location;    
    northEast: Location;
}

export function init(): void;

export function pickPlace(viewport?: Viewport): Promise<Place>;

export function getPlacesById(id: string[]): Promise<Place[]>;

export function getStaticMapUrl(
    place: Place, 
    options: { 
        width: number, 
        height: number
    }
): string;