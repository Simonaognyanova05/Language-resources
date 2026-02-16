export default function UserProfile() {

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card shadow h-100">
                        <div className="card-body text-center">


                            <h4 className="mb-1">Иван Иванов</h4>
                            <p className="text-muted mb-2">ivan@email.com</p>

                            <hr />

                            <div className="text-start">
                                <p><strong>Дата на регистрация:</strong> 12.01.2026</p>
                                <p><strong>План:</strong> Premium</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="mb-4">Закупени файлове</h4>

                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Име на файл</th>
                                            <th>Дата на покупка</th>
                                            <th>Цена</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>design-template.zip</td>
                                            <td>10.02.2026</td>
                                            <td>29.99 лв</td>
                                            <td>
                                                <button className="btn btn-sm btn-dark">
                                                    Изтегли
                                                </button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>business-pack.pdf</td>
                                            <td>05.02.2026</td>
                                            <td>19.99 лв</td>
                                            <td>
                                                <button className="btn btn-sm btn-dark">
                                                    Изтегли
                                                </button>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>logo-bundle.ai</td>
                                            <td>28.01.2026</td>
                                            <td>39.99 лв</td>
                                            <td>
                                                <button className="btn btn-sm btn-dark">
                                                    Изтегли
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
