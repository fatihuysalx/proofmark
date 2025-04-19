import qrcode

# QR koduna eklenecek veri
data = "https://www.orneksite.com/doğrulama?id=12345"

# QR kodu oluştur
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# QR kodu görselini oluştur
img = qr.make_image(fill_color="black", back_color="white")

# Görseli kaydet
img.save("qrcode.png")
