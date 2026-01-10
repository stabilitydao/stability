import { UnitType } from "../os";

/** Organization activities supported by OS. */
export enum Activity {
  /** Owner of Decentralized Finance protocols */
  DEFI = "DEFI",
  /** Owner of Maximum Extractable Value tools */
  MEV = "MEV",
  /** BUILDER is a team of engineers managed by DAOs. */
  BUILDER = "BUILDER",
  /** Owner of Software as a Service business */
  //SAAS_OPERATOR = "SAAS_OPERATOR",
}

export const activities: {
  [activity in Activity]: {
    title: string;
    unitTypes: UnitType[];
    description?: string;
  };
} = {
  [Activity.DEFI]: {
    title: "Decentralized Finance Protocol Operator",
    unitTypes: [UnitType.DEFI_PROTOCOL],
  },
  [Activity.MEV]: {
    title: "Maximum Extractable Value tools",
    unitTypes: [UnitType.MEV_SEARCHER],
  },
  [Activity.BUILDER]: {
    title: "Team of engineers with multisig wallet.",
    unitTypes: [],
  },
};
