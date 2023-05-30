import { ReactNode } from 'react';
import Header from '../Header/Header';
import { ContainerDefault, ContentDefault, WrapperDefault } from './StyledDefaultLayout';
import SideBar from '../SideBar/SideBar';

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <WrapperDefault>
            <Header />
            <ContainerDefault>
                <SideBar />
                <ContentDefault>{children}</ContentDefault>
            </ContainerDefault>
        </WrapperDefault>
    );
}

export default DefaultLayout;
