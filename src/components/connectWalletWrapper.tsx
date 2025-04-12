import { useConnectWallet } from "@/app/context/connectWallet"; 

const ConnectWalletButtonWrapper = ({ children, className } : { children: React.ReactNode, className?: string }) => {
  const { setModalOpen } = useConnectWallet();
  return (
    <div className={className}  onClick={() => setModalOpen(true)}>
      {children}
    </div>
  );
}

export default ConnectWalletButtonWrapper;