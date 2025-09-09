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
  description: string;
  severity: Severity;
};

type Status = Record<Checks, StatusCheck>;

export const status: Status = {
  [Checks.SEED_NODES_SYNCED]: {
    id: Checks.SEED_NODES_SYNCED,
    description: "Seed nodes synced",
    severity: Severity.MAJOR,
  },
  [Checks.TX_SENDER_WORKING]: {
    id: Checks.TX_SENDER_WORKING,
    description: "Transaction sender working",
    severity: Severity.MAJOR,
  },
  [Checks.TX_SENDER_BALANCE_INSUFFICIENT]: {
    id: Checks.TX_SENDER_BALANCE_INSUFFICIENT,
    description: "Transaction sender balance insufficient",
    severity: Severity.CRITICAL,
  },
  [Checks.SUBGRAPH_WORKING]: {
    id: Checks.SUBGRAPH_WORKING,
    description: "Subgraph working",
    severity: Severity.CRITICAL,
  },
  [Checks.DATA_READER_DATA_UP_TO_DATE]: {
    id: Checks.DATA_READER_DATA_UP_TO_DATE,
    description: "Data reader data up to date",
    severity: Severity.MAJOR,
  },
  [Checks.RPC_WORKING]: {
    id: Checks.RPC_WORKING,
    description: "RPC working",
    severity: Severity.MAJOR,
  },
};
