function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black dark:text-white" href="#">
                        <img src="/assets/icons/trending.svg" width="24" height="24" alt="Trending" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black dark:text-white" href="#">
                        <img src="/assets/icons/newRelease.svg" width="24" height="24" alt="New Releases" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black dark:text-white" href="#">
                        <img src="/assets/icons/commingSoon.svg" width="24" height="24" alt="Coming Soon" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black dark:text-white" href="#">
                        <img src="/assets/icons/favourite.svg" width="24" height="24" alt="Favourites" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black dark:text-white" href="#">
                        <img src="/assets/icons/watchLater.svg" width="24" height="24" alt="Watch Later" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
