import Header from '../../components/Header/Header';
import './Playlist.css';

export default function Playlist() {
    return (
        <div className="playlist">
            <Header />
        <table className="table table-middle text1">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Plot</th>
                    <th scope="col">Watched/Unwatched</th>
                </tr>
            </thead>
            <tbody>
                {/* First Row */}
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '150px', height: '200px' , marginTop:"80px" }}
                                className="rounded mt-2"
                            />
                            <div className="ms-3">
                                {/* <p className="fw-bold mb-1">John Doe</p> */}
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal " style={{ marginTop:"80px" }}>Software engineer</p>
                        {/* <p className="text-muted mb-0">IT department</p> */}
                    </td>
                    <td>
                        <p className="fw-normal " style={{ marginTop:"80px" }}>Software engineer</p>
                        {/* <p className="text-muted mb-0">IT department</p> */}
                    </td>
                    <td>
                        <p className="fw-normal " style={{ marginTop:"80px" }}>Software engineer</p>
                        {/* <p className="text-muted mb-0">IT department</p> */}
                    </td>
                    <td>
                        <p className="fw-normal " style={{ marginTop:"80px" }}>Software engineer</p>
                        {/* <p className="text-muted mb-0">IT department</p> */}
                    </td>
                    <td>
                        <a href="#" className="btn button2 rounded-sm" style={{ marginTop:"70px" }}>
                            Unwatched
                        </a>
                    </td>
                </tr>


            </tbody>
        </table>
        </div>
    );
}
