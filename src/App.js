import { useEffect, useState } from "react";
import "./app.scss";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  //của carousel
  const options = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    autoplay: true,
    smartSpeed: 500,
    // loop: true,
    responsive: {
      // 0: {
      //   items: 3,
      // },
      400: {
        items: 3,
      },
      // 600: {
      //   items: 5,
      // },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      // 1280: {
      //   items: 9,
      // },
    },
  };

  //function
  const luuLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const goiLocal = (key) => {
    if (key === "listSanPham") {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        //khách có đặt hàng không
        const order = data.filter((item) => item.order > 0);
        if (order.length > 0) {
          setListSanPham(data);
        }
      }
    }
  };

  const capNhatLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // const capNhatGioHang = () => {
  //   const gioHang = JSON.parse(localStorage.getItem("gioHang"));
  //   if (gioHang) {
  //     setGioHang(gioHang);
  //   }
  // };

  // const capNhatLocal = (gioHang) => {
  //   localStorage.setItem("gioHang", JSON.stringify(gioHang));
  // };

  //dữ liệu gọi từ backend
  const data = [
    {
      id: 1,
      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 4500,
      giamGia: 20,
      gif: 1,
      order: 0,
    },
    {
      id: 2,

      hinhAnh:
        "https://cooponline.vn/wp-content/uploads/2022/06/bia-tiger-lon-330ml-2023227.jpg",
      tenSp: "Bia tiger lon 330ml",
      giaVon: 20000,
      giamGia: 22,
      gif: 0,
      order: 0,
    },
    {
      id: 3,

      hinhAnh:
        "https://dungculambanh.com.vn/wp-content/uploads/2020/11/duong-cat-bien-hoa-500gr.jpg",
      tenSp: "Đường cát trắng Biên hoà, bịch 1kg",
      giaVon: 28000,
      giamGia: 5,
      gif: 1,
      order: 0,
    },
    {
      id: 4,

      hinhAnh:
        "https://product.hstatic.net/200000548939/product/240-2_0773d428c19d4591b36804e244bf557c_ba4976017a8a4745af0a98bf7fb699b8_master.jpg",
      tenSp: "Nước mắm Thuận Phát, chai 1 lít",
      giaVon: 29000,
      giamGia: 8,
      gif: 0,
      order: 0,
    },
    {
      id: 5,

      hinhAnh:
        "https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/256191.jpg",
      tenSp: "Bột ngọt Vedan bịch 1kg",
      giaVon: 22000,
      giamGia: 0,
      gif: 0,
      order: 0,
    },
    {
      id: 6,

      hinhAnh: "https://alohay.vn/cdn/uploadv2/news/1596595864_13.jpg",
      tenSp: "Nước tương Chinsu chai 250ml",
      giaVon: 9000,
      giamGia: 10,
      gif: 0,
      order: 0,
    },
    {
      id: 7,

      hinhAnh:
        "https://product.hstatic.net/200000073345/product/tuong_ot_cholimex_pet_270gr_7e6adf3e97fc4f0aa3959b8e834abe9e_1024x1024.jpg",
      tenSp: "Tương ớt Cholimex chai 270g",
      giaVon: 7000,
      giamGia: 12,
      gif: 0,
      order: 0,
    },
    {
      id: 8,

      hinhAnh:
        "https://saphavi.eu/cdn/shop/products/8936017362331_1.jpg?v=1575477392",
      tenSp: "Nước mắm Chinsu chai 500ml",
      giaVon: 12000,
      giamGia: 3,
      gif: 1,
      order: 0,
    },
    {
      id: 9,

      hinhAnh:
        "https://product.hstatic.net/1000074072/product/bich_fino_sua_tuoi_-_khong_duong_c6990e9228e343b3b76885870916fec6_master.png",
      tenSp: "Sữa tươi Vinamilk bịch 220ml",
      giaVon: 7000,
      giamGia: 5,
      gif: 1,
      order: 0,
    },
    {
      id: 10,

      hinhAnh: "https://phuhuong.vn/watermark/sua/vnm-1l-duong.gif",
      tenSp: "Sữa tươi Vinamilk hộp 1 lít",
      giaVon: 89000,
      giamGia: 19,
      gif: 1,
      order: 0,
    },
  ];

  const [listSanPham, setListSanPham] = useState(data);

  //lấy ra những sản phẩm đã đặt
  let tongTien = 0;
  const gioHang = listSanPham?.filter((item) => {
    if (item.order > 0) {
      return item;
    }
    // let { id, hinhAnh, tenSp, giaVon, giamGia, gif, order } = item;
    // if (order > 0) {
    //   let giaBan = giaVon - (giaVon * giamGia) / 100;
    //   let data = {
    //     ...item,
    //     giaBan
    //   }
    //   return data
    // }
  });

  useEffect(() => {
    goiLocal("listSanPham");
  }, []);

  //tìm kiếm sản phẩm
  // Hàm chuyển đổi dấu tiếng Việt sang không dấu
  const boDauTiengViet = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s]/g, ""); // Loại bỏ các ký tự không phải chữ cái, số, hoặc khoảng trắng
  };

  const [ketQuaTimKiem, setKetQuaTimKiem] = useState([]);

  const timKiemSanPham = (event) => {
    const keyword = boDauTiengViet(event.target.value);
    const result = listSanPham.filter((item) => {
      return boDauTiengViet(item.tenSp).includes(keyword);
    });

    setKetQuaTimKiem(result);
  };

  //click thêm vào giỏ
  const handleThemVaoGio = (data) => {
    const { id } = data;
    const updatedListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return { ...item, order: 1 }; // Thay đổi trạng thái soLuong thành true
      }
      return item; // Giữ nguyên các sản phẩm khác
    });

    //lưu sản phẩm
    luuLocal("listSanPham", updatedListSanPham);

    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);

    // // đọc store
    // const localStore = JSON.parse(localStorage.getItem("gioHang"));
    // if (localStore === null) {
    //   gioHang.push(data);
    //   //lưu local
    //   localStorage.setItem("gioHang", JSON.stringify(gioHang));
    // } else {
    //   setGioHang(localStore);
    //   //kiểm tra xem có trùng sản phẩm không?
    //   //trùng thì cộng dồn số lượng, không trùng thì thêm mới
    //   const checkSanPham = gioHang.find((item) => item.id === id);
    //   if (checkSanPham) {
    //     const capNhatGioHang = gioHang.map((item) => {
    //       if (item.id === id) {
    //         return {
    //           ...item,
    //           order: item.order + data.order,
    //         };
    //       } else {
    //         return {
    //           ...item,
    //         };
    //       }
    //     });
    //     localStorage.setItem("gioHang", JSON.stringify(capNhatGioHang));
    //   } else {
    //     gioHang.push(data);
    //     localStorage.setItem("gioHang", JSON.stringify(gioHang));
    //   }
    // }
    // capNhatGioHang();
  };

  //giảm số lượng
  const handleGiamSoLuong = (id) => {
    const updatedListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        if (item.order >= 1) {
          return {
            ...item,
            order: item.order - 1,
          };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });

    //lưu sản phẩm
    luuLocal("listSanPham", updatedListSanPham);

    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);
  };

  //tăng số lượng
  const handleTangSoLuong = (id) => {
    const updatedListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: item.order + 1,
        };
      } else {
        return item;
      }
    });

    //lưu sản phẩm
    luuLocal("listSanPham", updatedListSanPham);

    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);
  };

  // const handleChangeSoLuong = (id, event) => {
  //   const value = Number(event.target.value.replaceAll(",", "")); // Chuyển giá trị thành số nguyên
  //   const updatedListSanPham = listSanPham.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         order: isNaN(value) ? 1 : value, // Nếu giá trị không hợp lệ thì đặt lại là 1
  //       };
  //     }
  //     return item;
  //   });
  //   setListSanPham(updatedListSanPham);
  // };

  //click giỏ hàng
  const [showCart, setShowCart] = useState(false);
  const handleGioHang = () => {
    setShowCart(!showCart);
  };

  //delete order
  const handleDeleteItem = (id) => {
    const updatedListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: 0,
        };
      } else {
        return item;
      }
    });

    //lưu sản phẩm
    luuLocal("listSanPham", updatedListSanPham);

    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);

    // const index = gioHang.findIndex((item) => item.id === id);
    // if (index !== -1) {
    //   gioHang.splice(index, 1);
    // }

    // capNhatLocal(gioHang);
    // capNhatGioHang();
  };

  //click thanh toán
  const handleThanhToan = () => {
    console.log("first");
  };

  return (
    <div className="App">
      <div id="topMenu">
        <div className="myContainer">
          <div className="shopName">
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p>Bách hoá HÂN HÂN</p>
            </div>
            <div>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div className="myContainer">
          <div className="mySearch">
            <input
              type="text"
              id="timKiemSanPham"
              name="timKiemSanPham"
              placeholder="Xin chào, bạn muốn tìm gì hôm nay"
              onKeyUp={timKiemSanPham}
            />
            <i className="fa-solid fa-magnifying-glass myGlass"></i>
            <div className="gioHang">
              {gioHang?.length > 0 ? (
                <p onClick={handleGioHang}>{gioHang.length}</p>
              ) : null}
              <i
                className="fa-solid fa-cart-shopping"
                onClick={handleGioHang}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div id="main">
        {/* carousel */}
        {/* <div id="myCarousel">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
            <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
          </OwlCarousel>
        </div> */}

        <div className="mainContent">
          {ketQuaTimKiem.length > 0
            ? ketQuaTimKiem?.map((item) => {
              let { id, hinhAnh, tenSp, giaVon, giamGia, gif, order } = item;
              let giaBan = giaVon - (giaVon * giamGia) / 100;
              let data = {
                id,
                hinhAnh,
                tenSp,
                giaBan,
                order: 1,
              };
              return (
                <div className="proItem" key={id}>
                  <div className="proContent">
                    <div className="hinhAnh">
                      <img src={hinhAnh} alt="hình" />
                    </div>
                    <div className="tenSp">
                      <p>{tenSp}</p>
                    </div>
                    <div className="giaSp">
                      <p className="giaBan">{giaBan.toLocaleString()}đ</p>
                      <p className="giaAo">
                        {giamGia > 0 ? giaVon.toLocaleString() + "đ" : null}
                      </p>
                    </div>
                  </div>

                  <div>
                    {order > 0 ? (
                      <div className="soLuong">
                        <div>
                          <i
                            className="fa-solid fa-minus giam"
                            onClick={() => handleGiamSoLuong(id)}
                          ></i>
                        </div>
                        <div>
                          {/* <input
                          type="text"
                          id={id}
                          name={id}
                          value={order.toLocaleString()}
                          onChange={(event) => handleChangeSoLuong(id, event)}
                        /> */}
                          <h3>{order.toLocaleString()}</h3>
                        </div>
                        <div>
                          <i
                            className="fa-solid fa-plus tang"
                            onClick={() => handleTangSoLuong(id)}
                          ></i>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => handleThemVaoGio(data)}>
                        Thêm vào giỏ
                      </button>
                    )}
                  </div>
                  {giamGia > 0 ? (
                    <div className="giamGia">
                      {" "}
                      <p>{`-${giamGia}%`}</p>{" "}
                    </div>
                  ) : null}
                  <div className="heart">
                    <i className="fa-regular fa-heart"></i>
                  </div>

                  {gif === 1 ? (
                    <div className="gif">
                      {" "}
                      <i className="fa-solid fa-gift"></i>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })
            : listSanPham?.map((item) => {
              let { id, hinhAnh, tenSp, giaVon, giamGia, gif, order } = item;
              let giaBan = giaVon - (giaVon * giamGia) / 100;
              let data = {
                id,
                hinhAnh,
                tenSp,
                giaBan,
                order: 1,
              };
              return (
                <div className="proItem" key={id}>
                  <div className="proContent">
                    <div className="hinhAnh">
                      <img src={hinhAnh} alt="hình" />
                    </div>
                    <div className="tenSp">
                      <p>{tenSp}</p>
                    </div>
                    <div className="giaSp">
                      <p className="giaBan">{giaBan.toLocaleString()}đ</p>
                      <p className="giaAo">
                        {giamGia > 0 ? giaVon.toLocaleString() + "đ" : null}
                      </p>
                    </div>
                  </div>

                  <div>
                    {order > 0 ? (
                      <div className="soLuong">
                        <div>
                          <i
                            className="fa-solid fa-minus giam"
                            onClick={() => handleGiamSoLuong(id)}
                          ></i>
                        </div>
                        <div>
                          {/* <input
                          type="text"
                          id={id}
                          name={id}
                          value={order.toLocaleString()}
                          onChange={(event) => handleChangeSoLuong(id, event)}
                        /> */}
                          <h3>{order.toLocaleString()}</h3>
                        </div>
                        <div>
                          <i
                            className="fa-solid fa-plus tang"
                            onClick={() => handleTangSoLuong(id)}
                          ></i>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => handleThemVaoGio(data)}>
                        Thêm vào giỏ
                      </button>
                    )}
                  </div>
                  {giamGia > 0 ? (
                    <div className="giamGia">
                      {" "}
                      <p>{`-${giamGia}%`}</p>{" "}
                    </div>
                  ) : null}
                  <div className="heart">
                    <i className="fa-regular fa-heart"></i>
                  </div>

                  {gif === 1 ? (
                    <div className="gif">
                      {" "}
                      <i className="fa-solid fa-gift"></i>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
        </div>
      </div>

      <div id="bottomMenu">
        <div className="myContainer">
          <div className="bottomItem">
            <div>
              <i className="fa-solid fa-house"></i>
              <p>Trang chủ</p>
            </div>
            <div>
              <i className="fa-solid fa-layer-group"></i>
              <p>Danh mục</p>
            </div>
            <div>
              <i className="fa-solid fa-bag-shopping"></i>
              <p>Thương hiệu</p>
            </div>
            <div>
              <i className="fa-solid fa-bell"></i>
              <p>Thông báo</p>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
              <p>Tài khoản</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="overlay"
        className={showCart ? "show" : ""}
        onClick={handleGioHang}
      ></div>

      <div id="cart" className={showCart ? "showCart" : ""}>
        <div className="cartHeader">
          <button type="button" className="myClose" onClick={handleGioHang}>
            Đóng
            {/* <i className="fa-solid fa-xmark"></i> */}
          </button>
          <p>Giỏ hàng của bạn ({gioHang?.length})</p>
        </div>

        <div className="cartMain">
          <table>
            <tbody>
              {gioHang?.map((item) => {
                let { id, hinhAnh, tenSp, order, giaVon, giamGia, gif } = item;
                let giaBan = giaVon - (giaVon * giamGia) / 100;

                let thanhTien = giaBan * order;
                tongTien += thanhTien;

                return (
                  <tr key={id}>
                    <td className="hinhAnh">
                      <img src={hinhAnh} alt={tenSp} />
                    </td>
                    <td>
                      {tenSp}
                      <div className="smallText">
                        <span className="donGia">
                          {giaBan.toLocaleString()}đ
                        </span>
                        <i
                          className="fa-solid fa-minus giam"
                          onClick={() => handleGiamSoLuong(id)}
                        ></i>
                        <span className="soLuong">{order}</span>
                        <i
                          className="fa-solid fa-plus tang"
                          onClick={() => handleTangSoLuong(id)}
                        ></i>
                      </div>
                    </td>
                    <td className="thanhTien">
                      <div>
                        <span
                          className="delete"
                          onClick={() => handleDeleteItem(id)}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </span>
                      </div>
                      {thanhTien.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="cartBottom">
          <div>
            <p>Tổng: {tongTien.toLocaleString()}đ</p>
          </div>
          <div>
            <button type="button" onClick={handleThanhToan}>
              Đặt hàng ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
