export interface IPerson {
    cast_id: number;
    character?: string;
    credit_id: number;
    gender: number;
    gender_type?: string;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
    department?: string;
    job?: string;
}

export interface IPersonDetail extends IPerson {
    biography: string;
    birthday: string;
    brith?: {
        day: string,
        month: string,
        year: string
    }
    place_of_birth: string;
    deathday: string | null;
    homepage: string | null;
    name: string;
}
