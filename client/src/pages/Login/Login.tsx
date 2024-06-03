import "./Login.css";

function Dashboard() {
    return (
        <div className="login-page">


            <nav className="navbar navbar-default" role="banner">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <a href="/oauth2-server/login" className="navbar-brand"></a>
                    </div>

                    <div className="collapse navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li className="dropdown hidden-sm" is-open="lang.isOpen">
                                <a href="" dropdown-toggle="" data-toggle="dropdown" className="dropdown-toggle ng-binding" ng-bind="selectLang.langDesc" aria-haspopup="true" aria-expanded="false">Македонски</a>
                                <ul dropdown-menu="" className="dropdown-menu menu-lang">
                                    <li ng-repeat="lang in langs" className="ng-scope">
                                        <a href="">Македонски</a>
                                    </li><li ng-repeat="lang in langs" className="ng-scope">
                                        <a href="">English</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="form-wrapper">

                <form action="">
                    <div className="fields-wrapper box-border">
                        <h3 className="form-header">Административен модул</h3>
                        <fieldset>
                            <div className="input">
                                <label>Потребител</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="input">
                                <label>Парола</label>
                                <input type="password" />
                            </div>
                            <div className="input">
                                <button id="submitBtn" className="btn btn-primary ng-scope" type="submit">ВХОД</button>
                            </div>
                        </fieldset>



                    </div>

                </form>
            </div>

        </div>




    )
}

export default Dashboard
