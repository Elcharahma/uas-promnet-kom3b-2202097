import React, { Component, useState } from "react";
import UserService from "../services/UserService";
import Swal from "sweetalert2";


const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return [count, increment, decrement];
};

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: "",
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",
    };

    this.changeJudulBuku = this.changeJudulBuku.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNamaPeminjam = this.changeNamaPeminjam.bind(this);
    this.changeAlamatPeminjam = this.changeAlamatPeminjam.bind(this);
    this.changeNohpPeminjam = this.changeNohpPeminjam.bind(this);
    this.changeTanggalPinjam = this.changeTanggalPinjam.bind(this);
    this.changeTanggalPengembalian = this.changeTanggalPengembalian.bind(this);
    this.changeLamaPinjam = this.changeLamaPinjam.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }
  increment = () => {
    const [, Increment] = useCounter(0);
    Increment();
  };

  decrement = () => {
    const [, , Decrement] = useCounter(0);
    Decrement();
  };

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          judul_buku: user.judul_buku,
          jumlah: user.jumlah,
          nama_peminjam: user.nama_peminjam,
          alamat_peminjam: user.alamat_peminjam,
          noHp_peminjam: user.noHp_peminjam,
          tanggal_pinjam: user.tanggal_pinjam,
          tanggal_pengembalian: user.tanggal_pengembalian,
          lama_pinjam: user.lama_pinjam,
        });
      });
    }
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      judul_buku: this.state.judul_buku,
      jumlah: this.state.jumlah,
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tanggal_pinjam: this.state.tanggal_pinjam,
      tanggal_pengembalian: this.state.tanggal_pengembalian,
      lama_pinjam: this.state.lama_pinjam,
    };
    console.log("user => " + JSON.stringify(user));

    // step 5
    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
        Swal.fire(
          'Success',
          'Added Successfully!',
          'success'
        )
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
        Swal.fire(
          'Success',
          'Updated Successfully!',
          'success'
        )
      });
    }
  };

  changeJudulBuku = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: event.target.value });
  };

  changeNamaPeminjam = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamatPeminjam = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNohpPeminjam = (event) => {
    this.setState({ noHp_peminjam: event.target.value });
  };

  changeTanggalPinjam = (event) => {
    this.setState({ tanggal_pinjam: event.target.value });
  };

  changeTanggalPengembalian = (event) => {
    this.setState({ tanggal_pengembalian: event.target.value });
  };

  changeLamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h2 className="textJudul text-center">Add Data Buku </h2>;
    } else {
      return <h2 className="textJudul text-center">Update Peminjam Buku</h2>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className=" col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form class="create">
                  <div className="form-group">
                    <label> Judul Buku </label>
                    <input

                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudulBuku}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jumlah </label>
                    <input type="number" class="nomer"
                      name="jumlah"
                      value={this.state.jumlah}
                      onChange={this.changeJumlah}
                    />
                  </div>
                  <div className="form-group">
                    <label> Nama Peminjam: </label>
                    <input

                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNamaPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Alamat Peminjam </label>
                    <input

                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamatPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> NoHp Peminjam: </label>
                    <input
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNohpPeminjam}
                    ></input>
                  </div>
                  <div className="form-grouptgl">
                    <div className="form-group">
                      <label>Tanggal Pinjam </label>
                      <input
                        type="date"

                        name="tanggal_pinjam"
                        className="form-control"
                        value={this.state.tanggal_pinjam}
                        onChange={this.changeTanggalPinjam}
                      />
                    </div>
                    <div className="form-groupp">
                      <label >Tanggal Kembali</label>
                      <input
                        type="date"

                        name="tanggal_pengembalian"
                        className="form-control"
                        value={this.state.tanggal_pengembalian}
                        onChange={this.changeTanggalPengembalian}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label> Lama Pinjam </label>
                    <input

                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeLamaPinjam}
                    />
                  </div>
                  <button
                    className="btnSave"
                    onClick={this.saveOrUpdateUser}

                  >
                    Save
                  </button>
                  <button
                    className="btnCancel"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default CreateUserComponent;