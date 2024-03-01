import { Link as RouterLink } from 'react-router-dom';

function Link({ to, title }) {
    return (
        <RouterLink
            className='App-link'
            to={to}
        >
            {title}
        </RouterLink>
    );
}

export default Link;
