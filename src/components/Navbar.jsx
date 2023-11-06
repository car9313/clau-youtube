import Stack from '@mui/material/Stack';
import { logo } from '../utils/constants/'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' p={2} sx={{ position: 'sticky', background: '#000', top: 0, zIndex: 999 }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='Logo Clau Youtube' height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}
export default Navbar