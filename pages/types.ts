
export interface BannerTypes {
    purpose: string;
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
    imageUrl: string;
    linkName: string;
    buttonText: string;
}

export interface Properties {
    hits: any[];
    nbHits: string;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    query: string;
    exhaustiveNbHits: boolean;
    params: string;
    processingTimeMS: number;
    id: number | string ;
}

export interface PropertyProps {
    name:string;
    purpose: string;
    rentFrequency: string;
    categoryExternalID: string;
    minPrice: string;
    maxPrice: string;
    areaMax: string;
    roomsMin: string;
    bathsMin: string;
    sort: string;
    locationExternalIDs: string;
}

