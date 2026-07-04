import Swal from 'sweetalert2';

// ===== SweetAlert2 gói theo màu của UI (styles.css) =====
// --primary #4f46e5 · --success #28a745 · --danger #e5484d
// Toàn bộ nút dùng chung class .btn để nhất quán với phần còn lại của app.

const swal = Swal.mixin({
  buttonsStyling: false,
  confirmButtonColor: '#4f46e5',
  cancelButtonColor: '#e5484d',
  customClass: {
    popup: 'swal-app',
    confirmButton: 'btn green',
    cancelButton: 'btn gray',
    denyButton: 'btn red',
  },
});

// Hộp xác nhận (dùng cho xóa sách...). Trả về true nếu người dùng đồng ý.
export async function xacNhan(opts: {
  title: string;
  text?: string;
  confirmText?: string;
  nguyHiem?: boolean; // nút xác nhận màu đỏ cho hành động phá hủy
}): Promise<boolean> {
  const kq = await swal.fire({
    title: opts.title,
    text: opts.text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: opts.confirmText ?? 'Xác nhận',
    cancelButtonText: 'Hủy',
    reverseButtons: true,
    customClass: {
      popup: 'swal-app',
      confirmButton: opts.nguyHiem ? 'btn red' : 'btn green',
      cancelButton: 'btn gray',
    },
  });
  return kq.isConfirmed;
}

// Thông báo thành công (toast góc trên phải, tự tắt).
export function thanhCong(title: string, text?: string) {
  return swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title,
    text,
    showConfirmButton: false,
    timer: 2800,
    timerProgressBar: true,
    customClass: { popup: 'swal-app swal-toast' },
  });
}

// Thông báo lỗi (ở giữa màn hình để người dùng chú ý).
export function loi(title: string, text?: string) {
  return swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonText: 'Đã hiểu',
    customClass: { popup: 'swal-app', confirmButton: 'btn green' },
  });
}

export default swal;
