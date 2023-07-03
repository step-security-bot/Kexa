import { AzureResources } from "./azure/resource.models";
import { GitResources } from "./git/resource.models";

export interface ProviderResource {
    azure: AzureResources;
    gcp: any;
    aws: any;
    ovh: any;
    git: GitResources;
}