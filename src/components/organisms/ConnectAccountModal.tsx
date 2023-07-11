'use client';
import { useAccount, useConnect } from 'wagmi';
import { Button, Modal } from '../atoms';
import { useBoolean } from 'usehooks-ts';
import useLaunchError from '@/hooks/useLaunchError';

const ConnectAccountModal: React.FC = () => {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { value, setTrue, setFalse } = useBoolean(false);

  useLaunchError(error);

  return (
    <div>
      <Button onClick={setTrue}>
        Connect
      </Button>
      <Modal
        title="Connect account"
        open={value}
        onClose={setFalse}
      >
        {isConnected && <div>Connected to {activeConnector?.name}</div>}
        {address}

        {connectors.map((connector) => (
          <Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {isLoading &&
              pendingConnector?.id === connector.id &&
              ' (connecting)'}
          </Button>
        ))}
      </Modal>
    </div>
  );
};

export default ConnectAccountModal;
