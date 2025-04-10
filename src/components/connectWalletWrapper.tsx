import { useConnectWallet } from "@/app/context/connectWallet"; 

const ConnectWalletButtonWrapper = ({ children } : { children: React.ReactNode }) => {
  const { setModalOpen } = useConnectWallet();
  return (
    <div onClick={() => setModalOpen(true)}>
      {children}
    </div>
  );
}

export default ConnectWalletButtonWrapper;