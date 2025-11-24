import { UnitComponentCategory } from "../os";

export interface ILabel {
  name: string;
  description: string;
  color: string;
}

export interface IGithubUser {
  username: string;
  img: string;
}

export interface IIssue {
  repo: string;
  id: number;
  title: string;
  labels: ILabel[];
  assignees: IGithubUser;
  body?: string;
}

export interface IBuilderMemory {
  openIssues: {
    total: { [repo: string]: number };
    pools: { [poolName: string]: IIssue[] };
  };
  conveyors: {
    [conveyorName: string]: {
      [taskId: string]: {
        [stepName: string]: IIssue[];
      };
    };
  };
}

/**
 * Pool of development tasks.
 * @interface
 */
export interface IPool {
  unitIds: string[];
  name: string;
  label: ILabel;
  productTypes?: string[];
  artifacts?: ArtifactType[];
}

export interface IConveyor {
  unitId: string;
  componentCategory: UnitComponentCategory;
  name: string;
  symbol: string;
  type: string;
  label: ILabel;
  description: string;
  issueTitleTemplate: string;
  taskIdIs: string;
  steps: IConveyorStep[];
}

export const enum ArtifactType {
  LIBRARY_RELEASE_TAG = "Library release tag",
  DEPLOYMENT_ADDRESSES = "Deployment addresses",
  URL_UI = "URL to UI page",
  URL_API = "API endpoint",
  URL_STATIC = "Static content URL",
  CONTRACT_ADDRESS = "Address of deployed contract",
}

export interface IConveyorStep {
  name: string;
  issues: {
    repo: string;
    taskList?: string[];
    issueTemplate?: string;
    body?: string;
    generator?: string;
  }[];
  artifacts?: ArtifactType[];
  result?: string;
  guide?: string;
}
