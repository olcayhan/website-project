import React from 'react'

export default function Contact() {
    return (
        <section id='contact'>
            <div class="container">
                <h2 class="text-center text-light">Bizimle İletişime Geçin</h2>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 pb-5">
                        <form>
                            <div class="card rounded-5">
                                <div class="card-header p-0">
                                    <div class="text-center py-2">
                                        <h3><i class="fa fa-envelope"></i> İletişim</h3>
                                    </div>
                                </div>

                                <div class="card-body p-3">
                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text mt-1"><i class="fa fa-user"></i></div>
                                            </div>
                                            <input type="text" class="form-control rounded-3 ms-2" id="nombre" name="nombre" placeholder="Kullanıcı Adı" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text mt-1"><i class="fa fa-envelope"></i></div>
                                            </div>
                                            <input type="email" class="form-control rounded-3 ms-2" id="nombre" name="email" placeholder="example@gmail.com" required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text mt-3"><i class="fa fa-comment"></i></div>
                                            </div>
                                            <textarea class="form-control rounded-3 ms-2" placeholder="yazmak istediğiniz mesaj" required></textarea>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <input type="submit" value="Gönder" class="btn btn-outline-dark btn-block rounded-3 py-2" />
                                    </div>
                                </div>

                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </section>
    )
}
