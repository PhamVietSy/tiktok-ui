import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { HeaderPage, Inner, LogoHead, SearchHead, Button, ActionHead, InputHead, ButtonType } from './StyledHeader';
import { SearchOutlined, CloseCircleOutlined, LoadingOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function Header() {
    const [seacrchResult, setSeacrchResult] = useState<string[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setSeacrchResult(['1', '2']);
        }, 2000);
    }, []);
    const linkStyle = {
        textDecoration: 'none',
        color: 'rgba(22, 24, 35, 1)',
    };
    return (
        <HeaderPage>
            <Inner>
                <LogoHead>
                    <Link to="/">
                        <img
                            width={90}
                            height={45}
                            style={{ borderRadius: 20 }}
                            src="https://inrenhat.com/wp-content/uploads/2022/08/logo-Tiktok.jpg"
                            alt="Tiktok"
                        />
                    </Link>
                </LogoHead>
                <Tippy
                    interactive
                    visible={seacrchResult.length > 0}
                    render={(attrs) => (
                        <div className="box" tabIndex={-1} {...attrs}>
                            My tippy box
                        </div>
                    )}
                >
                    <SearchHead>
                        <InputHead placeholder="Search accounts and videos" />
                        <Button type={ButtonType.LOADING}>
                            <CloseCircleOutlined />
                        </Button>
                        <Button type={ButtonType.LOADING}>
                            <LoadingOutlined />
                        </Button>

                        <Button type={ButtonType.SEARCH}>
                            <SearchOutlined />
                        </Button>
                    </SearchHead>
                </Tippy>
                <ActionHead>
                    <Button type={ButtonType.UPLOAD}>
                        <VideoCameraAddOutlined style={{ marginRight: 5 }} />
                        <Link to="/upload" style={linkStyle}>
                            Upload
                        </Link>
                    </Button>
                    <Button type={ButtonType.LOGIN}>Login</Button>
                </ActionHead>
            </Inner>
        </HeaderPage>
    );
}

export default Header;
