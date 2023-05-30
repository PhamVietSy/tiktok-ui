import Following from '../pages/Following/Following';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Upload from '../pages/Upload/Upload';

const publicRoutes = [
    { path: '/', element: Home, layout: undefined },
    { path: '/profile', element: Profile, layout: undefined },
    { path: '/upload', element: Upload, layout: null },
    { path: '/following', element: Following, layout: undefined },
];
// privateRoutes
export { publicRoutes };
