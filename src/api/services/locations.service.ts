import { AxiosResponse } from "axios";

import http from "../http_axios";
import env from "../../utils/config/env.config";
import { LocationApiRes } from "../../store/features/locations/types";

const url = `${env.geocodingApiUrl}`;

class LocationsService {
  getLocationsByName(
    name: string,
  ): Promise<AxiosResponse<LocationApiRes>> {
    const res = http.get<LocationApiRes>(
      `${url}`,
      {
        params: {
          name
        }
      }
    );
    return res;
  }
}

export default new LocationsService();
