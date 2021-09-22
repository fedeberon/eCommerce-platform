import React from 'react';

class Services extends React.Component {

    render() {
        return (
            <div className="page servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><h1 className="titpage">Nuestros servicios</h1></div>
                        <div className="col-md-6">
                            <img src="img/servicios-01.jpg"/>
                                <div className="recuadro">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra in
                                        orci in laoreet. Adipiscing elit</p>
                                    <img src="img/servicios-01.svg" className="servicio"/>
                                        <a href="#" className="btn btn-lg btn-whatsapp" role="button"
                                           aria-pressed="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>WhatsApp</title><path d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z" /><path d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"  fill-rule="evenodd"/></svg> Consultar</a>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/servicios-02.jpg"/>
                                <div className="recuadro">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra in
                                        orci in laoreet. Adipiscing elit</p>
                                    <img src="img/servicios-02.svg" className="servicio"/>
                                        <a href="#" className="btn btn-lg btn-whatsapp" role="button"
                                           aria-pressed="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>whatsapp</title><path d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z" /><path d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"  fill-rule="evenodd"/></svg>
                                             Consultar</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default Services;