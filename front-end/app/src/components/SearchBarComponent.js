import React from 'react';

class SearchBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    render() {

        let textSearch = this.state.textSearch;

        return <div className="col-sm-4">
            <div className="input-group md-form form-sm pl-0 searchtop">
                <input id="input-user" className="form-control my-0 py-1 searchtop-input" type="text"
                       placeholder="Buscar productos" aria-label="Search"
                       onKeyPress={(e) => e.key === 'Enter' ? window.location.href = `/products/search=${this.state.textSearch}` : ""}
                       value={this.state.textSearch}
                       onChange={(event) => this.setState({textSearch: event.target.value})}/>
                <div className="input-group-text searchtop-icon" id="basic-text1" style={{backgroundColor: '#fff'}}>
                    <a id="asd" href={`/products/search=${this.state.textSearch}`} style={{
                        pointerEvents: `${textSearch.length === 0 ? 'none' : "auto"}`,
                        cursor: `${textSearch.length === 0 ? 'default' : 'pointer'}`
                    }}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 42 42"><title>Buscar</title>
                            <path
                                d="M39.063,37.986,27.935,26.858a14.549,14.549,0,1,0-1.078,1.077L37.985,39.063a.762.762,0,1,0,1.078-1.077ZM17.19,30.143A12.953,12.953,0,1,1,30.143,17.19,12.968,12.968,0,0,1,17.19,30.143Z"/>
                          <path
                              d="M38.523,40.507a1.985,1.985,0,0,1-1.393-.574L26.785,29.584a15.745,15.745,0,1,1,2.8-2.8L39.926,37.123a1.983,1.983,0,0,1-1.4,3.384ZM17.19,5.456A11.735,11.735,0,1,0,28.923,17.19,11.746,11.746,0,0,0,17.19,5.456Z"/>
                        </svg>
                       </span>
                    </a>
                </div>
            </div>
        </div>
    }

}

export default SearchBarComponent;