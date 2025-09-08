
enum Checks {
    SEED_NODES_SYNCED = 'seedNodesSynced',
    TX_SENDER_WORKING = 'txSenderWorking',
    TX_SENDER_BALANCE_INSUFFICIENT = 'txSenderBalanceInsufficient',
    SUBGRAPH_WORKING = 'subgraphWorking',
    DATA_READER_DATA_UP_TO_DATE = 'dataReaderDataUpToDate',
    RPC_WORKING = 'rpcWorking',
}

enum Severity {
    MINOR,
    MAJOR,
    CRITICAL,
}

type StatusCheck = {
    id: Checks;
    description: string;
    severity: Severity
}

type Status = StatusCheck[]

export const status: Status = [
    {
        id: Checks.SEED_NODES_SYNCED,
        description: 'Seed nodes synced',
        severity: Severity.MAJOR
    },
    {
        id: Checks.TX_SENDER_WORKING,
        description: 'Transaction sender working',
        severity: Severity.MAJOR
    },
    {
        id: Checks.TX_SENDER_BALANCE_INSUFFICIENT,
        description: 'Transaction sender balance insufficient',
        severity: Severity.CRITICAL
    },
    {
        id: Checks.SUBGRAPH_WORKING,
        description: 'Subgraph working',
        severity: Severity.CRITICAL
    },
    {
        id: Checks.DATA_READER_DATA_UP_TO_DATE,
        description: 'Data reader data up to date',
        severity: Severity.MAJOR
    },
    {
        id: Checks.RPC_WORKING,
        description: 'RPC not working working',
        severity: Severity.MAJOR
    },
]