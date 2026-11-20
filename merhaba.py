# Kullanıcının adını ve doğum yılını alıp yaşını hesaplayan, kişiye özel karşılama mesajı yazan program

# Güncel yılı sistem tarihinden dinamik olarak alabilmek için date sınıfını içe aktarıyoruz
from datetime import date

# Kullanıcıdan adını girmesini istiyoruz ve baştaki/sondaki gereksiz boşlukları siliyoruz
ad = input("Lütfen adınızı giriniz: ").strip()

# Kendi yaptığım değişiklik (1): Kullanıcı adını boş bırakırsa varsayılan bir hitap atıyoruz
if ad == "":
    ad = "Değerli Öğrenci"

# Sistem saatinden içinde bulunduğumuz güncel yılı otomatik olarak alıyoruz
guncel_yil = date.today().year

# Kullanıcıdan doğum yılını metin olarak alıp tam sayıya (int) dönüştürüyoruz
dogum_yili = int(input("Lütfen doğum yılınızı giriniz (örn. 2004): "))

# Kendi yaptığım değişiklik (2): Doğum yılının gelecekte veya mantıksız bir yılda olup olmadığını kontrol ediyoruz
if dogum_yili > guncel_yil:
    # Doğum yılı gelecekteyse kullanıcıya uyarı mesajı gösteriyoruz
    print(f"Uyarı: {dogum_yili} yılı henüz gelmedi! Lütfen geçerli bir doğum yılı giriniz.")
elif dogum_yili < 1900:
    # 1900'den küçük bir yıl girildiyse uyarı veriyoruz
    print("Uyarı: Lütfen 1900 veya daha büyük geçerli bir doğum yılı giriniz.")
else:
    # Güncel yıldan doğum yılını çıkararak kullanıcının yaşını hesaplıyoruz
    yas = guncel_yil - dogum_yili
    
    # Kullanıcının adına ve hesaplanan yaşına özel karşılama mesajını ekrana yazdırıyoruz
    print(f"\nMerhaba {ad}! GEP1316 Kodlama Okuryazarlığı dersine hoş geldin.")
    print(f"{guncel_yil} yılı itibarıyla {yas} yaşındasın. Başarılar dilerim!")