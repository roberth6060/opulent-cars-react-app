import apolloClient from "../../graphql";
import { GET_COLLECTION } from "./queries";
import { Get_Collection_getCars } from "./__generated__/Get_Collection";

class CollectionService {
  public async getCollection(): Promise<Get_Collection_getCars[]> {
    const response = await apolloClient
      .query({ query: GET_COLLECTION })
      .catch((error) => {
        throw error;
      });

    if (response && response.data && response.data.getCars)
      return response.data.getCars as Get_Collection_getCars[];
    //or return empty array
    return [];
  }
}

export default new CollectionService();
