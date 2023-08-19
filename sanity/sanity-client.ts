import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: 'kdgya1fk',
    dataset: 'production',
    apiVersion: '2023-08-18',
    useCdn: false
}

const client = createClient(config)

export default client