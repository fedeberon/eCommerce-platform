import React, {useState} from 'react';

export default function ModalCustomer() {


    const [show, setShow] = useState(false);

    const handleModal = () => setShow(!show);

    return (

        <>
            <button id="mod2" title="Acceso" type="button" onClick={handleModal} className="clientes">Acceso a
                clientes &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <title>arrow-right-circle</title>
                    <path
                        d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z"/>
                    <path
                        d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z"/>
                </svg>
            </button>
            <div className={`modal fade ${show ? "show modal-open" : ""}`}
                 style={{display: show ? 'block' : 'none', paddingRight: '15px',}} id="modalCustomer" tabIndex="-1"
                 role="dialog"
                 aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{height: '434px', marginLeft: 'auto'}}>

                        <div className="modal-header" style={{height: '78px', width: '401px', marginTop: 0}}>
                            <h4 className="modal-title" id="Login">LOGIN </h4>
                            <button type="button" onClick={handleModal} className="close" data-dismiss="modal"
                                    aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email1"
                                           placeholder="Your email address..."/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password1"
                                           placeholder="Your password..."/>
                                </div>
                                <button type="button" className="btn btn-info btn-block btn-round">Login</button>
                            </form>
                        </div>
                        <div className="text-center text-muted delimiter">or use a social network</div>

                        <div>
                            <div style={{width: '390px', height: '40px'}}>
                                <div className="social top">
                                    <a href="https://www.facebook.com/lared.wifi" target="_blank"
                                       className="social-icon" style={{marginLeft: '150px'}}>
                                        <svg viewBox="0 0 320 512">
                                            <path
                                                d="M279.1 288l14.3-92.7h-89v-60c0-25.4 12.5-50.2 52.3-50.2H297V6.4S260.4 0 225.4 0C152 0 104.3 44.4 104.3 124.7v70.6H22.9V288h81.4v224h100.2V288z"/>
                                        </svg>
                                    </a>
                                    <a href="" target="_blank" className="social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <div className="signup-section">Not a member yet? <a href="#a" className="text-info"> Sign
                                Up</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}