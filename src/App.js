import { useState } from "react";
import "./app.scss";

function App() {
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
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 150000,
      giamGia: 0,
      gif: 0,
      order: 0,
    },
    {
      id: 6,

      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 150000,
      giamGia: 10,
      gif: 0,
      order: 0,
    },
    {
      id: 7,

      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 150000,
      giamGia: 10,
      gif: 0,
      order: 0,
    },
    {
      id: 8,

      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 12000,
      giamGia: 3,
      gif: 1,
      order: 0,
    },
    {
      id: 9,

      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 12000,
      giamGia: 3,
      gif: 1,
      order: 0,
    },
    {
      id: 10,

      hinhAnh:
        "https://acecookvietnam.vn/wp-content/uploads/2017/07/H%E1%BA%A3o-H%E1%BA%A3o-T%C3%B4m-chua-cay_down33_.png",
      tenSp: "Mì Hảo Hảo tôm chua cay",
      giaVon: 12000,
      giamGia: 3,
      gif: 1,
      order: 0,
    },
  ];

  const [listSanPham, setListSanPham] = useState(data);

  //click thêm vào giỏ
  const handleThemVaoGio = (data) => {
    const { id } = data;
    const updatedListSanPham = listSanPham.map((item) => {
      if (item.id === id) {
        return { ...item, order: 1 }; // Thay đổi trạng thái soLuong thành true
      }
      return item; // Giữ nguyên các sản phẩm khác
    });

    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);
  };

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
    // Sau khi cập nhật, bạn có thể cập nhật state listSanPham
    setListSanPham(updatedListSanPham);
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
              placeholder="Xin chào, bạn muốn tìm gì hôm nay"
            />
            <i className="fa-solid fa-magnifying-glass myGlass"></i>
            <div className="gioHang">
              <p></p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>

      <div id="main">
        <div className="mainContent">
          {listSanPham?.map((item, index) => {
            let {
              id,
              hinhAnh,
              tenSp,
              giaVon,
              giamGia,
              gif,
              soLuongVisible,
              order,
            } = item;
            let giaBan = giaVon - (giaVon * giamGia) / 100;
            let data = {
              id,
              tenSp,
              giaBan,
              order: 1,
            };
            return (
              <div className="proItem" key={index}>
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
                          className="fa-solid fa-minus"
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
                          className="fa-solid fa-plus"
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
    </div>
  );
}

export default App;
