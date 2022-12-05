import React from 'react'
import { useInView } from 'react-intersection-observer';
import foto1 from "../../assets/foto.jpg"
import "../styles/AboutSection.css"

export default function AboutSection() {

  const { ref: textRef, inView: showText } = useInView({
    triggerOnce: true
  });
  const { ref: secondTextRef, inView: secondShowText } = useInView(
    {
      triggerOnce: true
    }
  );

  return (
    <section id="about" className='about'>


      <div className="content" ref={textRef}>



        <img className="trueImg" style={showText ? { transform: "translateX(0%)" } : { transform: "translateX(-50%)" }} src={foto1} />
        <div className="text">
          <div className={showText ? "free1" : "free2"}></div>
          <h1>Hakkımızda</h1>
          <div className={showText ? "free2" : "free1"}></div>

          <p className="truePos" style={showText ? { transform: "translateX(0%)" } : { transform: "translateX(50%)" }}>
            Ankara Devlet Opera Orkestrası keman sanatçıları tarafından 1990 yılında kurulan Çağlar Müzik Kursu
            Ankara’nın en eski müzik kursu olarak 31 yıldır binlerce öğrenciyi sanatla tanıştırdı ve halen
            alanında profesyonel eğitmenlerle çalışmalarını sürdürmekte.
          </p>
          <p className="truePos" style={showText ? { transform: "translateX(0%)" } : { transform: "translateX(50%)" }}>
            Atatürk ilke ve devrimlerinden ödün vermeden çalışmalarına devam eden Çağlar Müzik Kursu 2020 yılında
            Bandırma’da Ankara Devlet opera ve Balesi emekli keman sanatçısı Ayhan Çağlar tarafından kurulan
            Çağlar Müzik kursu MEB’e bağlı olarak her yaştan öğrenciye müzik eğitimi vermektedir.
          </p>

        </div>
        <div className="content mt-5" >
          <div className="text" ref={secondTextRef}>
            <p className="secondTrue" style={secondShowText ? { transform: "translateX(0%)" } : { transform: "translateX(-50%)" }} >
              Ankara Devlet Opera Orkestrası keman sanatçıları tarafından 1990 yılında kurulan Çağlar Müzik Kursu
              Ankara’nın en eski müzik kursu olarak 31 yıldır binlerce öğrenciyi sanatla tanıştırdı ve halen
              alanında profesyonel eğitmenlerle çalışmalarını sürdürmekte.
            </p>
            <p className="secondTrue" style={secondShowText ? { transform: "translateX(0%)" } : { transform: "translateX(-50%)" }}>
              Atatürk ilke ve devrimlerinden ödün vermeden çalışmalarına devam eden Çağlar Müzik Kursu 2020 yılında
              Bandırma’da Ankara Devlet opera ve Balesi emekli keman sanatçısı Ayhan Çağlar tarafından kurulan
              Çağlar Müzik kursu MEB’e bağlı olarak her yaştan öğrenciye müzik eğitimi vermektedir.
            </p>
          </div>
          <img className="secondTrueImg" style={secondShowText ? { transform: "translateX(0%)" } : { transform: "translateX(50%)" }} src={foto1} />
        </div>
        {/* 
          <p className={showText ? "truePos" : "falsePos"}> 2001 yılında çağlar çocuk orkestrasını kurdu ve 2004 yılında Çağlar Oda Orkestrasını
            hayata geçirdi. 2005 yılında ODTÜ Senfoniyle birlikte 5 yıl boyunca çalışmalarını sürdüren
            Çağlar Müzik Kursu bir çok önemli sanatçıyla birlikte Türkiye’de ve yurt dışında bir çok konsere
            imza attı.</p>
          
          <p>Devlet Opera ve Balesinin solist sanatçılarıyla birlikte yapmış olduğu Kıbrıs Konserinde çok büyük
            övgüler aldı. 2006 yılında MEB Çankaya İlçe Milli Eğitim Müdürlüğünün düzenlemiş olduğu Klasik Batı
            Müziği Eser Seslendirme Yarışmasının sponsorluğunu üstlenen Çağlar Müzik Kursu dereceye giren
            öğrencilerle birlikte Milli Eğitim Müdürlüğü Çağlar Çocuk Orkestrasını kurarak Ankara’nın önemli
            konser salonlarında sayısız konserler yaptı. 2009 yılına kadar sponsorluğuna devam eden çağlar müzik
            kursu bu orkestralarda kendi yetiştirmiş olduğu öğrencilerle büyük başarılar kazandı.</p>

          <p>2010 yılında Ankara Çocuk Tiyatrosunu kurdu ve Maltepe Park AVM de bulunan Kültür Merkezini bünyesine
            katarak bir çok çocuk oyununa ve büyük oyununa ev sahipliği yaptı. Çocuklar için Keloğlan,
            Cindirella, Pamuk Prenseses gibi çocuk klasiklerini sahneye koyarak bir çok çocukla tiyatroyu
            tanıştırdı.</p>

          <p> Ankara Devlet Tiyatrosu Sanatçılarıyla birlikte Aşk Kaşıntısı oyununda sahneye koyan
            Çağlar Müzik Kursu Ankara’da ve diğer illerde bir çok gösteriye katıldı. Aynı yıl Fareli Köyün
            Kavalcı Müzikalini Devlet Tiyatroları Sanatçısı Sanlı Baykent yönetiminde Çağlar Çocuk Orkestrasıyla
            birlikte sahneye koydu.</p>

          <p> 2012 yılında 1.Bodrum Yaz Festivalini başlatan Çağlar Müzik Kursu 6 yıldır çalışmalarını Bodrum yaz
            kamplarında yurt dışından konuk olarak çağırdığı sanatçılarla ve Türkiye’ den önemli sanatçılarla
            yapmaktadır.</p>

          <p>15 .yaz kampını yapan Çağlar Müzik Kursu binlerce öğrenciyle yaz konserleri düzenlemiştir.</p>

          <p>2014 yılında Fethiye Konserini 110 çocukla birlikte yaparak büyük bir başarıya imza atmıştır.</p>

          <p>Ankara’da bulunana Türkiye’nin en büyük AVM’lerinden olan Kentpark AVM, Devlet Opera Balesi Eski
            Genel Müzik Direktörü ve Çağlar Müzik Kursu Çocuk Solistleriyle birlikte 300 Kişilik Çocuk
            Orkestrası Konserini gerçekleştirerek büyük bir başarıya da imza atmıştır.
            2015 yılında Türkiye’de bir ilke imza atan Çağlar Müzik Kursu Paris Yaz Kampına da Sanatçı Tayfun
            Dinçer ve bir çok Çağlar Müzik öğrencisiyle birlikte Master Class düzenlemiştir.</p>

          <p>Çağlar Müzik Kursu; Devlet Opera Balesi Solistleri Tuncay Kurtoğlu, Şenol Talınlı, Esin Talınlı,
            Tayfun Bozok, Gitar Sanatçısı Cem Duruöz,Keman Sanatçısı Ferhat Agamalizade, Orkestra Şefi Bujor
            Honick, Sunay Muradov, Naci Özgüç gibi önemli sanatçılarla birlikte bir çok konsere başarıyla imza
            atmıştır.</p> */}
        {/* <button className='detailsBtn' type="button">Details</button> */}

      </div>
    </section >
  )
}
