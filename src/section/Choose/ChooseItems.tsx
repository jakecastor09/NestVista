import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const ChooseItems = ({ children }: Props) => {
  return <div className='flex flex-col mt-4 '>{children}</div>;
};

export default ChooseItems;
