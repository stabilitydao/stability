export enum Checks {
  SEED_NODES_SYNCED = "seedNodesSynced",
  TX_SENDER_WORKING = "txSenderWorking",
  TX_SENDER_BALANCE_INSUFFICIENT = "txSenderBalanceInsufficient",
  SUBGRAPH_WORKING = "subgraphWorking",
  DATA_READER_DATA_UP_TO_DATE = "dataReaderDataUpToDate",
  RPC_WORKING = "rpcWorking",
}

export enum Severity {
  MINOR,
  MAJOR,
  CRITICAL,
}

type StatusCheck = {
  id: Checks;
  descriptionOk: string;
  descriptionFail: string;
  severity: Severity;
};

type Status = Record<Checks, StatusCheck>;

export const status: Status = {
  [Checks.SEED_NODES_SYNCED]: {
    id: Checks.SEED_NODES_SYNCED,
    descriptionOk: "Seed nodes synced",
    descriptionFail: "Seed nodes not synced",
    severity: Severity.MAJOR,
  },
  [Checks.TX_SENDER_WORKING]: {
    id: Checks.TX_SENDER_WORKING,
    descriptionOk: "Transaction sender working",
    descriptionFail: "Transaction sender not working",
    severity: Severity.MAJOR,
  },
  [Checks.TX_SENDER_BALANCE_INSUFFICIENT]: {
    id: Checks.TX_SENDER_BALANCE_INSUFFICIENT,
    descriptionOk: "Transaction sender balance sufficient",
    descriptionFail: "Transaction sender balance insufficient",
    severity: Severity.CRITICAL,
  },
  [Checks.SUBGRAPH_WORKING]: {
    id: Checks.SUBGRAPH_WORKING,
    descriptionOk: "Subgraph working",
    descriptionFail: "Subgraph not working",
    severity: Severity.CRITICAL,
  },
  [Checks.DATA_READER_DATA_UP_TO_DATE]: {
    id: Checks.DATA_READER_DATA_UP_TO_DATE,
    descriptionOk: "Data reader data up to date",
    descriptionFail: "Data reader data not up to date",
    severity: Severity.MAJOR,
  },
  [Checks.RPC_WORKING]: {
    id: Checks.RPC_WORKING,
    descriptionOk: "RPC working",
    descriptionFail: "RPC not working",
    severity: Severity.MAJOR,
  },
};
