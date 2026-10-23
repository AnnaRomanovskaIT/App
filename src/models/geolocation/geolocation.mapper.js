import { Geolocation } from "../geolocation/geolocation.model.js";

export function mapGeolocationData(data) {
    return (data.results ?? []).map(
        (result) =>
            new Geolocation({
                id: result.id,
                name: result.name,
                latitude: result.latitude,
                longitude: result.longitude,
                isoCode: result.country_code,
                countryName: result.country,
                timezone: result.timezone,
            })
    );
}
