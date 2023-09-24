import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const HistoryItemsContainer = ({ children }: Props) => {
  return <div className='mt-4 space-y-4 '>{children}</div>;
};

export default HistoryItemsContainer;
