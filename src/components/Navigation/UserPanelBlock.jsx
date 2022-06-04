import styled from '@emotion/styled';

import { NavMenu } from './NavMenu';
import UserPanel from '../UserPanel';
import { LogoutButton } from './LogoutButton';

export const UserPanelBlock = () => (
    <NavWrapper>
        <NavMenu />
        <UserPanel />
        <LogoutButton />
    </NavWrapper>
);

const NavWrapper = styled.div`
    display: flex;
`