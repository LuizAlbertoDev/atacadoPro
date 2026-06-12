/**
 * AtacadoPro | auth.js
 * Sistema de login com perfis: cliente, admin, conferente, caixa.
 */

const Auth = (() => {
    // perfil atual: 'cliente' | 'admin' | 'conferente' | 'caixa'
    let _perfil = 'cliente';

    const PERFIS = {
        cliente:    { label: 'Cliente',    icon: '👤' },
        admin:      { label: 'Admin',      icon: '🛡️' },
        conferente: { label: 'Conferente', icon: '📋' },
        caixa:      { label: 'Caixa',      icon: '🏧' },
    };

    function perfil()         { return _perfil; }
    function isCliente()      { return _perfil === 'cliente'; }
    function isFuncionario()  { return _perfil !== 'cliente'; }
    function isAdmin()        { return _perfil === 'admin'; }
    function isCaixa()        { return _perfil === 'caixa'; }

    function login(novoPerfil) {
        _perfil = novoPerfil;
        _fecharModal();
        _atualizarUI();
        document.dispatchEvent(new CustomEvent('perfilAlterado', { detail: { perfil: _perfil } }));
    }

    function logout() {
        login('cliente');
    }

    function abrirModal() {
        document.getElementById('login-overlay')?.classList.remove('oculto');
    }

    function _fecharModal() {
        document.getElementById('login-overlay')?.classList.add('oculto');
    }

    function _atualizarUI() {
        const btnLogin  = document.getElementById('btn-login');
        const perfilTag = document.getElementById('perfil-tag');

        // Atualiza botão/tag no header
        if (_perfil === 'cliente') {
            btnLogin.textContent  = '🔑 Login';
            btnLogin.className    = 'btn-login-header';
            if (perfilTag) perfilTag.style.display = 'none';
        } else {
            const p = PERFIS[_perfil];
            btnLogin.textContent = 'Sair';
            btnLogin.className   = 'btn-login-header ativo';
            if (perfilTag) {
                perfilTag.textContent = `${p.icon} ${p.label}`;
                perfilTag.style.display = 'inline-flex';
            }
        }

        // Visibilidade de elementos por perfil
        document.querySelectorAll('.so-funcionario').forEach(el => {
            el.style.display = isFuncionario() ? '' : 'none';
        });
        document.querySelectorAll('.so-admin').forEach(el => {
            el.style.display = isAdmin() ? '' : 'none';
        });
        document.querySelectorAll('.so-caixa').forEach(el => {
            el.style.display = isCaixa() ? '' : 'none';
        });
        document.querySelectorAll('.so-cliente').forEach(el => {
            el.style.display = isCliente() ? '' : 'none';
        });

        // Aba dashboard só para admin
        const tabDash = document.querySelector('.tab-dashboard');
        if (tabDash) tabDash.style.display = isAdmin() ? '' : 'none';

        // Aba caixa só para caixa e admin
        const tabCaixa = document.querySelector('.tab-caixa');
        if (tabCaixa) tabCaixa.style.display = (isCaixa() || isAdmin()) ? '' : 'none';

        // Indicadores no mapa
        if (typeof MapBuilder !== 'undefined') {
            MapBuilder.atualizarIndicadoresValidade(isFuncionario());
        }
    }

    // Toggle do botão header
    function toggleLogin() {
        if (_perfil === 'cliente') abrirModal();
        else logout();
    }

    return { perfil, isCliente, isFuncionario, isAdmin, isCaixa, login, logout, toggleLogin, abrirModal };
})();
