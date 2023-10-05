import { Dropdown, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

    const onClick = (path) => {
        navigate(path);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
                <svg
                    enableBackground="new 0 0 91 91"
                    height="35px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 91 91"
                    width="40px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <path
                            d="M85.713,12.142H5.861c-2.305,0-4.174-1.869-4.174-4.176c0-2.305,1.869-4.174,4.174-4.174h79.852   c2.305,0,4.174,1.869,4.174,4.174C89.887,10.273,88.018,12.142,85.713,12.142z"
                            fill="#565758"
                        />
                        <path
                            d="M85.713,49.858H5.861c-2.305,0-4.174-1.869-4.174-4.175c0-2.307,1.869-4.176,4.174-4.176h79.852   c2.305,0,4.174,1.869,4.174,4.176C89.887,47.989,88.018,49.858,85.713,49.858z"
                            fill="#565758"
                        />
                        <path
                            d="M85.713,87.571H5.861c-2.305,0-4.174-1.869-4.174-4.176s1.869-4.176,4.174-4.176h79.852   c2.305,0,4.174,1.869,4.174,4.176S88.018,87.571,85.713,87.571z"
                            fill="#565758"
                        />
                    </g>
                </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <Image
                        src="https://koshka.top/uploads/posts/2021-12/1638599322_29-koshka-top-p-kotiki-na-avatarku-32.jpg" //"https://otkritkis.com/wp-content/uploads/2022/06/peukx.jpg"
                        thumbnail
                        width={65}
                    />
                    <br></br>
                    GavrikovaNatalie@mail.ru
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClick('/')}>
                    Posts
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClick('/about')}>
                    About
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Menu;
