import React from 'react';
import Iframe from 'react-iframe';

class Contact extends React.Component {

    render() {
        return (


            <div className="page Contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><h1 className="titpage">Contacto</h1></div>
                        <div className="col-md-7">
                            <div className="recuadro">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="/img/iso.svg" className="iso"
                                             style={{width: '30px', height: '40px'}}/>
                                        <ul>
                                            <li><strong>Av. Alsina 555</strong>
                                                &nbsp;Bolivar, Buenos Aires
                                            </li>
                                            <li>Tel: 2314 404320</li>
                                            <li>2314 427308</li>
                                            <li>info@laredwifi.com.ar</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 mapa">
                                        <Iframe
                                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.356081281311!2d-61.113489383923934!3d-36.23084315290085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe31404386c1d%3A0x64f05c918d808d84!2sAv.%20Alsina%20555%2C%20B6550%20San%20Carlos%20de%20Bolivar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1596806316107!5m2!1ses-419!2sar"
                                            width="100%"
                                            height="150"
                                            frameBorder="0"
                                            style="border:0"
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"/>
                                    </div>
                                    <div className="col-12">
                                        <img src="/img/contacto.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 info">
                            <p className="intro">También podés realizarnos una consulta a través de
                                nuestro
                                formulario online.</p>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="nombre"
                                           aria-describedby="emailHelp" placeholder="Nombre"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="email"
                                           placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="telefono"
                                           placeholder="Telefono"/>
                                </div>
                                <div className="form-group">
                                            <textarea className="form-control" id="mensaje" placeholder="Mensaje"
                                                      rows="5"/>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{color: '#fff', backgroundColor: '#000', borderColor: '#000'}}>Consultar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;



