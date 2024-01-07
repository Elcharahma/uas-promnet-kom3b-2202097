import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }
  cancel() {
    this.props.history.push("/users");
  }
  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (

      <div className="bView container">
        <br></br>
        <div className=" col-md-6 offset-md-3">
          <h3 className="tView text-center">View Details</h3>
          <div className="view">
            <div className="row">
              <label> Judul buku : </label>
              <div> {this.state.user.judul_buku}</div>
            </div>
            <div className="row">
              <label> jumlah : </label>
              <div> {this.state.user.jumlah}</div>
            </div>
            <div className="row">
              <label> Nama Peminjam : </label>
              <div> {this.state.user.nama_peminjam}</div>
            </div>
            <div className="row">
              <label> Alamat Peminjam : </label>
              <div> {this.state.user.alamat_peminjam}</div>
            </div>
            <div className="row">
              <label> Nohp Peminjam : </label>
              <div> {this.state.user.noHp_peminjam}</div>
            </div>
            <div className="row">
              <label> Tanggal Pinjam : </label>
              <div> {this.state.user.tanggal_pinjam}</div>
            </div>
            <div className="row">
              <label> Tanggal Kembali : </label>
              <div> {this.state.user.tanggal_pengembalian}</div>
            </div>
            <div className="row">
              <label> Lama Pinjam : </label>
              <div> {this.state.user.lama_pinjam}</div>

            </div>
          </div>
        </div>
        <button
          className="btnCancel"
          onClick={this.cancel.bind(this)}
          style={{ marginLeft: "45%", marginTop: "30px" }}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default ViewUserComponent;
