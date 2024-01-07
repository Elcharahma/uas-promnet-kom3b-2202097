import React, { Component } from 'react'
import UserService from '../services/UserService'
import Swal from 'sweetalert2'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            searchTerm: '',
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        Swal.fire({
            title: 'Are you sure you want to delete this post?',
            text: 'This will delete this post permanently. You cannot undo this action',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',

            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.deleteUser(id).then(res => {
                    this.setState({
                        users: this.state.users.filter(user => user.id !== id)
                    });
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    );
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'User deletion cancelled :)',
                    'error'
                );
            }
        });
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }
    handleSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    getFilteredUsers() {
        const { users, searchTerm } = this.state;

        return users.filter(
            (user) =>
                user.judul_buku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.nama_peminjam.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    render() {
        return (
            <div class="dataBuku">
                <h2 className="text-center">
                    Data Peminjam Buku</h2>
                <br></br>
                <form>
                    <div className="cari">
                        <input type="text"

                            className="inputSearch"
                            placeholder="Find Something Here"
                            value={this.state.searchTerm}
                            onChange={(e) => this.handleSearchChange(e)} />
                        <div className="addSearch row">
                            <button className="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </form>
                <div className=" tableList row">
                    <table className
                        ="table  table-bordered ">

                        <thead>
                            <tr>
                                <th>Judul</th>
                                <th>Jumlah</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Hp</th>
                                <th>Pinjam</th>
                                <th> Kembali</th>
                                <th>Lama</th>
                                <th>Option</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.getFilteredUsers().map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        {user.judul_buku}
                                    </td>
                                    <td>
                                        {user.jumlah}
                                    </td>
                                    <td>
                                        {user.nama_peminjam}
                                    </td>
                                    <td>
                                        {user.alamat_peminjam}
                                    </td>
                                    <td>
                                        {user.noHp_peminjam}
                                    </td>
                                    <td>
                                        {user.tanggal_pinjam}
                                    </td>
                                    <td>
                                        {user.tanggal_pengembalian}
                                    </td>
                                    <td>
                                        {user.lama_pinjam}
                                    </td>
                                    <td>
                                        <button
                                            className="btnList"
                                            onClick={() => this.editUser(user.id)}
                                        ><i class="fa-solid fa-pen-to-square "></i>
                                        </button>

                                        <button
                                            className="btnList"
                                            onClick={() => this.viewUser(user.id)}
                                        ><i class="fa-solid fa-eye"></i>
                                        </button>

                                        <button
                                            className="btnList"
                                            onClick={() => this.deleteUser(user.id)}
                                        ><i class="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="addNew row">
                    <button className="btnAdd "
                        onClick={this.addUser}><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        )
    }
}

export default ListUserComponent
