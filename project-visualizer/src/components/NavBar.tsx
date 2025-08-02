import axios from "axios";
import ROOT from '../constants/constants';

interface Props {
    folders: string[];
    onSetFolderContents: (contents: string[]) => void;
    onSetCurrentFolder: (folder: string) => void;
}

const NavBar = ({ folders, onSetFolderContents, onSetCurrentFolder }: Props) => {
    const fetchFolderContents = (folderName: string) => {
        axios.get(ROOT + folderName).then((res) => {
            onSetFolderContents(res.data);
        });
    };

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Folders
                            </a>
                            <ul className='dropdown-menu'>
                                {folders.map((folder) => (
                                    <a
                                        className='dropdown-item'
                                        key={folder}
                                        onClick={() => {
                                            onSetCurrentFolder(folder);
                                            fetchFolderContents(folder);
                                        }}
                                    >
                                        {folder}
                                    </a>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
