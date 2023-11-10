import './registerPage.css'
function RegisterPage() {
    return (
        <main className="container py-5 centerAli">
            <div class="row g-5 regis">
                <h4 class="mb-3">Lista de cadastro</h4>
                <form class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">Nome completo</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label for="dateOfBirth" class="form-label">Data de nascimento</label>
                            <input type="text" name="dateOfBirth" class="form-control" id="dateOfBirth" placeholder="01/01/2001" value="" required="" />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="voce@exemplo.com" />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="address" class="form-label">Criar senha</label>
                            <input type="text" class="form-control" id="address" required="" />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="address" class="form-label">Confirmar senha</label>
                            <input type="text" class="form-control" id="address" required="" />
                            <div class="invalid-feedback">
                                Please enter your shipping address
                            </div>
                        </div>
                        <div class="col-md-5">
                            <label for="country" class="form-label">Pais</label>
                            <select class="form-select" id="country" required="">
                                <option value="">Escolher...</option>
                                <option>Brasil</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="state" class="form-label">Estado</label>
                            <select class="form-select" id="state" required="">
                                <option value="">Escolher...</option>
                                <option>São Paulo</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                    </div>
                    <hr class="my-4" />
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address" required />
                        <label class="form-check-label" for="same-address">Li e concordo com os termos de uso</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="save-info" />
                        <label class="form-check-label" for="save-info">Gostaria de receber novidades por email</label>
                    </div>
                    <hr class="my-4" />
                    <button class="w-100 btn btn-warning btn-lg" type="button">Cadastrar</button>
                </form>
            </div>
        </main>
    )
}
export default RegisterPage;